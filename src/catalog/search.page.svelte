<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/search/$types';
  import type { Catalog, CatalogSort, DotagiftxList } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  // Lib
  import * as Card from '$lib/components/ui/card';

  import CatalogSearchForm from './search.form.svelte';
  import CatalogSearchToolBar from './search.toolbar.svelte';
  import CatalogList from './list.svelte';

  let { data }: Props = $props();

  let results = data.results as DotagiftxList<Catalog[]>;
  let sort = data.sort as CatalogSort;
  let q = data.q;
</script>

<section class="catalog-search-page container mx-auto py-8 space-y-4">
  <!-- Search input -->
  <CatalogSearchForm />

  <!-- Toolbar/Filters -->
  <CatalogSearchToolBar
    total={results.total_count}
    {q}
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
