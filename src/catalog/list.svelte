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

  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';
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
    <div class="flex items-center space-x-4">
      <Skeleton class="size-12" />
      <div class="space-y-2 flex-1">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-[200px]" />
      </div>
    </div>
  {:else}
    {#if catalogs}
      {#each catalogs as catalog, i (i)}
        <a href={`/${catalog.slug}`}>
          <CatalogItem {catalog} {sort} class="mb-2" />
        </a>
      {/each}
    {/if}
  {/if}
</section>
