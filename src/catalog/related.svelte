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
  import { HeroAvatar } from '$package/hero';

  // Lib
  import * as Card from '$lib/components/ui/card';

  import { getCatalogs } from './client';
  import { cn } from '$lib/utils';

  let { catalog, class: className }: Props = $props();

  // let loading = true;
  let heroItemCount = $state(0);

  // Get the stats
  onMount(async () => {
    const result = await getCatalogs({
      hero: catalog.hero,
      limit: 1,
      index: 'hero',
    });

    heroItemCount = result.result_count;
  });
</script>

<div class={cn(className)}>
  <Card.Root>
    <Card.Content>
      <a href={`/search?s=${catalog.hero}`} class="flex flex-row gap-4">
        <HeroAvatar hero={catalog.hero} class="w-40" />
        <div class="flex-1">
          <h3 class="text-2xl font-medium">{catalog.hero}</h3>
          <p class="text-muted-foreground">{heroItemCount} items</p>
        </div>
      </a>
    </Card.Content>
  </Card.Root>
</div>
