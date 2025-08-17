<script lang="ts">
  // Interfaces
  import type { PageData } from './$types';

  // Packages
  import { ProfilePage } from '$package/user';

  export let data: PageData;
</script>

<ProfilePage {data} />
