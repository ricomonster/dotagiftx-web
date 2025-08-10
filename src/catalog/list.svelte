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
      const result = await getCatalogs({ sort, limit });
      catalogs = result.data;
    }

    loading = false;
  });
</script>

<section class={cn('catalog-list grid gap-x-8 min-w-0 space-y-2', className)}>
  {#if loading}
    {#each {length: limit} as _, i (i)}
      <ItemLoader />
    {/each}
  {:else}
    {#if catalogs}
      {#each catalogs as catalog, i (i)}
        <a href={`/${catalog.slug}`} class="min-w-0">
          <ItemCard {catalog} {sort} class="gap-2" />
        </a>
      {/each}
    {/if}
  {/if}
</section>
