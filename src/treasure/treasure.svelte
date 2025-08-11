<script lang="ts" module>
  import { cn } from '$lib/utils';
  // Interfaces
  import type { Treasure } from '$package/dotagiftx';

  interface Props {
    treasure: string | Treasure;
    inventory?: boolean;
    class?: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Packages
  import { getCatalogs } from '$package/catalog';
  import { getTreasure } from '$package/dotagiftx';

  let { class: className, treasure, inventory = false }: Props = $props();

  let treasureItemCount = $state(0);

  onMount(async () => {
    if (typeof treasure === 'string') {
      const result = getTreasure(treasure);
      if (result) {
        treasure = result;
      }
    }

    if (treasure) {
      const origin = await getCatalogs({
        origin: typeof treasure === 'string' ? treasure : treasure.treasure,
        limit: 1,
        index: 'origin',
      });

      treasureItemCount = origin.total_count;
    }
  });
</script>

<article class={cn('flex min-w-0', inventory ? 'flex-row' : 'flex-col', className)}>
  {#if typeof treasure !== 'string'}
    <figure class={cn(inventory ? 'w-40' : 'w-full', 'shrink-0')}>
      <img src={treasure.asset} alt={treasure.treasure} class="w-full object-cover" />
    </figure>
    <div class="flex-1 min-w-0">
      <h3 class={cn('text-xl font-medium', inventory ? '' : 'text-center p-4 truncate')}>{treasure.treasure}</h3>
      {#if inventory}
        <p class="text-muted-foreground">{treasureItemCount} items</p>
      {/if}
    </div>
  {/if}
</article>
