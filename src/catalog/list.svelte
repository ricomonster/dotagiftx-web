<script lang="ts" module>
  import type { Catalog, CatalogSort, GetCatalogOpts } from '$package/dotagiftx';

  interface Props extends GetCatalogOpts {
    catalogs?: Catalog[];
    class?: string;
    limit?: number;
    sort?: CatalogSort;
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

  let {
    catalogs,
    class: className,
    hero,
    index,
    limit = 10,
    origin,
    page = 1,
    q,
    rarity,
    sort,
  }: Props = $props();

  let loading = $state(true);

  onMount(async () => {
    if ((hero || sort || origin) && (!catalogs || catalogs.length === 0)) {
      // Get the catalog
      const result = await getCatalogs({
        ...(hero && { hero }),
        ...(index && { index }),
        ...(limit && { limit }),
        ...(origin && { origin }),
        ...(page && { page }),
        ...(q && { q }),
        ...(rarity && { rarity }),
        ...(sort && { sort }),
      });

      catalogs = result.data;
    }

    loading = false;
  });
</script>

<section class={cn('catalog-list min-w-0 grid gap-x-8 space-y-2', className)}>
  {#if loading}
    {#each {length: limit} as _, i (i)}
      <ItemLoader />
    {/each}
  {:else}
    {#if catalogs}
      {#each catalogs as catalog, i (i)}
        <a href={`/${catalog.slug}`} class="min-w-0 col-span-1">
          <ItemCard {catalog} {sort} class="gap-2" />
        </a>
      {/each}
    {/if}
  {/if}
</section>
