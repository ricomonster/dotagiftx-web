<script lang="ts">
  // Interfaces
  import type { PageData } from './$types';

  // Packages
  import { CatalogSearchPage } from '$package/catalog';

  export let data: PageData;
</script>

<CatalogSearchPage {data} />
