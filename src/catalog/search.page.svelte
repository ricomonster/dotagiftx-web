<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/search/$types';
  import type { Catalog, CatalogSort, DotagiftxList } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Lib
  import * as Card from '$lib/components/ui/card';

  import CatalogSearchForm from './search.form.svelte';
  import CatalogSearchToolBar from './search.toolbar.svelte';
  import CatalogList from './list.svelte';

  let { data }: Props = $props();

  let results = data.results as DotagiftxList<Catalog[]>;
  let sort = data.sort as CatalogSort;

  let query = $state<string>('');

  onMount(() => {
    query = buildQuery();
  });

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
</script>

<section class="catalog-search-page container mx-auto py-8 space-y-4">
  <!-- Search input -->
  <CatalogSearchForm {query} />

  <!-- Toolbar/Filters -->
  <CatalogSearchToolBar
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
