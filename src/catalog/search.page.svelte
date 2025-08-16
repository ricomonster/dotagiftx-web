<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/search/$types';
  import type { Catalog, CatalogSort, DotagiftxList } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  import { page } from '$app/state';
  import { SvelteURLSearchParams } from 'svelte/reactivity';

  // Lib
  import * as Card from '$lib/components/ui/card';

  import CatalogSearchForm from './search.form.svelte';
  import CatalogSearchToolBar from './search.toolbar.svelte';
  import CatalogList from './list.svelte';
  import { goto } from '$app/navigation';

  let { data }: Props = $props();

  let results = $derived(data.results as DotagiftxList<Catalog[]>);
  let sort = $derived(data.sort as CatalogSort);

  const buildQuery = (): string => {
    if (data.q) {
      return data.q;
    }

    if (data.origin) {
      return data.origin;
    }

    if (data.hero) {
      return data.hero;
    }

    return '';
  };

  const handleSort = (sort: CatalogSort) => {
    let query = new SvelteURLSearchParams(page.url.searchParams.toString());
    query.set('sort', sort);
    goto(`?${query.toString()}`);
  };

  let query = $derived(buildQuery());
</script>

<section class="catalog-search-page container mx-auto space-y-4">
  <!-- Search input -->
  <CatalogSearchForm {query} />

  <!-- Toolbar/Filters -->
  <CatalogSearchToolBar
    onsort={handleSort}
    total={results.total_count}
    {query}
    {sort} />

  <!-- Results -->
  <div class="lg:max-w-4xl mx-auto">
    <Card.Root>
      <Card.Content>
        <CatalogList catalogs={results.data} />
      </Card.Content>
    </Card.Root>
  </div>
</section>
