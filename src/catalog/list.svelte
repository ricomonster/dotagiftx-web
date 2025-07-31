<script lang="ts" module>
  import type { Catalog, CatalogSort } from '$package/dotagiftx';

  interface Props {
    sort: CatalogSort
    catalogs?: Catalog[]
    class?: string
    limit?: number
  }
</script>
<script lang="ts">
  import { onMount } from 'svelte';

  // Packages
  import { ItemCard, ItemLoader } from '$package/item';

  // Lib
  import { cn } from '$lib/utils';

  // API
  import { getCatalogs } from './client';

  let { sort, catalogs, class: className, limit = 10 }: Props = $props();

  let loading = $state(true);

  onMount(async () => {
    if (!catalogs || catalogs.length === 0) {
      // Get the catalog
      catalogs = await getCatalogs({ sort, limit });
    }

    loading = false;
  });
</script>

<section class={cn('catalog-list', className, sort === 'trending' ? 'grid lg:grid-cols-2 xl:grid-cols-1 gap-x-8' : '')}>
  {#if loading}
    <div class="space-y-4">
      {#each {length: limit} as _, i (i)}
        <ItemLoader />
      {/each}
    </div>
  {:else}
    {#if catalogs}
      {#each catalogs as catalog, i (i)}
        <a href={`/${catalog.slug}`}>
          <ItemCard {catalog} {sort} class="mb-4" />
        </a>
      {/each}
    {/if}
  {/if}
</section>
