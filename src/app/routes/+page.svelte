<script lang="ts">
  // Interfaces
  import type { PageData } from './$types';

  // Package
  import { HomePage } from '$package/home';

  export let data: PageData;
</script>

<HomePage {data} />
