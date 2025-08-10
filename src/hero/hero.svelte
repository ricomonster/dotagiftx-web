<script lang="ts" module>
  // Interfaces
  import type { Hero } from '$package/dotagiftx';

  interface Props {
    hero: Hero;
    inventory?: boolean;
    class?: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Packages
  import { getCatalogs } from '$package/catalog';

  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { cn } from '$lib/utils';

  import Avatar from './avatar.svelte';

  let { class: className, hero, inventory }: Props = $props();

  let loading = $state(true);
  let count = $state(0);

  onMount(async () => {
    if (inventory) {
      const result  = await getCatalogs({
        hero,
        limit: 1,
        index: 'hero',
      });

      count = result.total_count;
      loading = false;
    }
  });
</script>

<article class={cn('flex min-w-0', className, inventory ? 'flex-row' : '')}>
  <Avatar {hero} class="w-40" />

  {#if inventory}
    {#if loading}
      <div class="flex-1 space-y-2">
        <Skeleton class="h-4 w-[50%]" />
        <Skeleton class="h-4 w-[20%]" />
      </div>
    {:else}
      <div class="flex-1">
        <h3 class="text-xl font-medium">{hero}</h3>
        <p class="text-muted-foreground">{count} items</p>
      </div>
    {/if}
  {/if}
</article>
