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
  import { ItemLoader } from '$package/item';

  // Lib
  import { cn } from '$lib/utils';

  // Components
  import CatalogItem from './item.svelte';

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

<section class={cn('catalog-list', className)}>
  {#if loading}
    <div class="space-y-2">
      {#each {length: limit} as _, i (i)}
        <ItemLoader />
      {/each}
    </div>
  {:else}
    {#if catalogs}
      {#each catalogs as catalog, i (i)}
        <a href={`/${catalog.slug}`}>
          <CatalogItem {catalog} {sort} class="mb-4" />
        </a>
      {/each}
    {/if}
  {/if}
</section>
