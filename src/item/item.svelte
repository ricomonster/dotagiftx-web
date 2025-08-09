<script lang="ts" module>
  import type { Catalog, CatalogSort } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
    class?: string
    sort?: CatalogSort
  }
</script>

<script lang="ts">
  // Packages
  import { DateTime, Image, Price } from '$package/shared';

  // Lib
  import { cn } from '$lib/utils';

  import RarityBadge from './rarity.svelte';

  let { catalog, class: className, sort }: Props = $props();
</script>

<article class={cn('flex items-start min-w-0', className)}>
  <Image
    key={catalog.slug}
    dimension="97x75"
    class="w-[97px] shrink-0"
    rarity={catalog.rarity}
    type="item" />

  <a href={`/${catalog.slug}`} class="flex-1 min-w-0">
    <h3 class="text-lg font-bold truncate">{catalog.name}</h3>
    <p class="text-sm">
      <span class="text-muted-foreground">{catalog.hero}</span>
      {#if !['regular'].includes(catalog.rarity)}
        <RarityBadge rarity={catalog.rarity} />
      {/if}
    </p>
  </a>

  <div class="flex flex-col shrink-0 text-right">
    {#if sort === 'recent'}
      <p class="font-medium text-green-600">
        <Price value={catalog.lowest_ask} />
      </p>
      <p class="text-sm font-medium text-muted-foreground">
        listed <DateTime value={catalog.recent_ask} />
      </p>
    {/if}

    {#if sort === 'recent-bid'}
      <p class="font-medium text-green-600">
        <Price value={catalog.highest_bid} />
      </p>
      <p class="text-sm font-medium text-muted-foreground">
        bought <DateTime value={catalog.recent_bid} />
      </p>
    {/if}

    {#if sort === 'trending'}
      <p class="font-medium text-green-600">
        <Price value={catalog.lowest_ask} />
      </p>
      <p class="text-sm font-medium text-muted-foreground">
        {catalog.quantity} listings
      </p>
    {/if}
  </div>
</article>
