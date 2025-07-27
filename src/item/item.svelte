<script lang="ts" module>
  import { cn } from '$lib/utils';
  import type { Catalog, CatalogSort } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
    class?: string
    sort?: CatalogSort
    vertical?: boolean
  }
</script>

<script lang="ts">
  let { catalog, class: className, sort, vertical = false }: Props = $props();

  // Packages
  import { Price } from '$package/shared';

  import ItemImage from './image.svelte';
  import RarityBadge from './rarity.svelte';
</script>

<article class={cn(vertical ? 'flex flex-col gap-2' : 'flex gap-2 md:flex-row flex-col', className)}>
  <figure class={cn(
    vertical ? 'w-full' : 'w-full md:w-1/5',
    'flex-shrink-0'
  )}>
    <ItemImage key={catalog.slug} class="w-full" />
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

    {#if sort === 'trending'}
      <div class={cn('text-right md:text-right', vertical && 'text-left md:text-right', 'flex-1')}>
        <p class="font-medium text-green-900">
          <Price value={catalog.lowest_ask} />
        </p>
        <p class="text-sm font-medium text-muted-foreground">
          {catalog.quantity} listings
        </p>
      </div>
    {/if}
  </div>
</article>
