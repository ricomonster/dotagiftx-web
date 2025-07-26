<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/$types';

  interface Props {
    data: PageData
  }
</script>
<script lang="ts">
  import Catalogs from './catalogs.svelte';
  import Heroes from './heroes.svelte';

  let { data }: Props = $props();

  let heroes = data.heroes ? data.heroes as string[] : [] ;
</script>

<section class="home-page container mx-auto">
  <Catalogs />

  <Heroes {heroes} />
</section>
