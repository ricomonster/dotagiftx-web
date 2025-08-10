<script lang="ts" module>
  import type { Catalog } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
    class?: string
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Packages
  import { Hero } from '$package/hero';

  // Lib
  import * as Card from '$lib/components/ui/card';

  import { getCatalogs } from './client';
  import { cn } from '$lib/utils';

  let { catalog, class: className }: Props = $props();

  let treasureItemCount = $state(0);

  // Get the stats
  onMount(async () => {
    const origin = await getCatalogs({
      origin: catalog.origin,
      limit: 1,
      index: 'origin',
    });

    treasureItemCount = origin.total_count;
  });
</script>

<div class={cn('grid gap-2', className)}>
  <Card.Root>
    <Card.Content>
      <a href={`/search?hero=${catalog.hero}`}>
        <Hero hero={catalog.hero} inventory={true} class="gap-2" />
      </a>
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Content>
      <a href={`/search?origin=${catalog.origin}`} class="flex flex-row gap-4">
        <div class="flex-1">
          <h3 class="text-xl font-medium">{catalog.origin}</h3>
          <p class="text-muted-foreground">{treasureItemCount} items</p>
        </div>
      </a>
    </Card.Content>
  </Card.Root>
</div>
