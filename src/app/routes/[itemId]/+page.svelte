<script lang="ts">
  // Interfaces
  import type { PageData } from './$types';

  // Package
  import { ItemPage } from '$package/item';

  export let data: PageData;
</script>

<ItemPage {data} />
