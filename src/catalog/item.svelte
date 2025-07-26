<script lang="ts" module>
  import { cn } from '$lib/utils';
  import type { Catalog, CatalogSort } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
    sort?: CatalogSort
    class?: string
  }
</script>

<script lang="ts">
  let { catalog, class: className, sort }: Props = $props();

  // Packages
  import { RarityBadge } from '$package/item';

  import CatalogImage from './image.svelte';
</script>

<article class={cn('grid grid-cols-5 gap-2', className)}>
  <figure class="col-span-1">
    <CatalogImage key={catalog.slug} class="w-full" />
  </figure>
  <div class="col-span-4 flex items-start">
    <div class="flex-1">
      <h3 class="font-bold">{catalog.name}</h3>
      <p class="text-sm">
        <span class="text-muted-foreground">{catalog.hero}</span>
        {#if !['regular'].includes(catalog.rarity)}
          <RarityBadge rarity={catalog.rarity} />
        {/if}
      </p>
    </div>
    {#if sort && sort === 'trending'}
      <div class="">
        {catalog.lowest_ask}
      </div>
    {/if}
  </div>
</article>
