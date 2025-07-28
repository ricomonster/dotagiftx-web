<script lang="ts">
  // Interfaces
  import type { PageData } from './$types';

  // Package
  import { CatalogDetailPage } from '$package/catalog';

  export let data: PageData;
</script>

<CatalogDetailPage {data} />
