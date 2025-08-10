<script lang="ts">
  // Interfaces
  import type { PageData } from './$types';

  // Packages
  import { TreasureListPage } from '$package/treasure';

  export let data: PageData;
</script>

<TreasureListPage {data} />
