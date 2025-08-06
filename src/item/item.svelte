<script lang="ts" module>
  import type { Catalog, CatalogSort } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
    class?: string
    sort?: CatalogSort
    vertical?: boolean
  }
</script>

<script lang="ts">
  // Packages
  import { DateTime, Image, Price } from '$package/shared';

  // Lib
  import { cn } from '$lib/utils';

  import RarityBadge from './rarity.svelte';

  let { catalog, class: className, sort, vertical = false }: Props = $props();
</script>

<article class={cn(vertical ? 'flex flex-col gap-2' : 'flex gap-2 md:flex-row flex-col', className)}>
  <figure class={cn(
    vertical ? 'w-full' : 'w-full md:w-1/5',
    'flex-shrink-0'
  )}>
    <Image key={catalog.slug} dimension="97x75" class="w-full" type="item" />
  </figure>

  <div class="flex-1 flex flex-col md:flex-row justify-between gap-2">
    <div class="space-y-1">
      <h3 class="font-bold text-lg">{catalog.name}</h3>
      <p class="text-sm">
        <span class="text-muted-foreground">{catalog.hero}</span>
        {#if !['regular'].includes(catalog.rarity)}
          <RarityBadge rarity={catalog.rarity} />
        {/if}
      </p>
    </div>

    <div class={cn('text-right md:text-right', vertical && 'text-left md:text-right', 'flex-1')}>
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
  </div>
</article>
