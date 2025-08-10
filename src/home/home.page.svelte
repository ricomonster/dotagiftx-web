<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/$types';
  import type { Hero } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>
<script lang="ts">
  // Packages
  import { CatalogSearchForm } from '$package/catalog';

  import Catalogs from './catalogs.svelte';
  import Heroes from './heroes.svelte';

  let { data }: Props = $props();

  let heroes = data.heroes ? data.heroes as Hero[] : [] ;
</script>

<svelte:head>
  <title>DotagiftX :: Dota 2 Giftables Community Market</title>
</svelte:head>

<section class="home-page container mx-auto py-8 space-y-4">
  <CatalogSearchForm />

  <Catalogs />

  <Heroes {heroes} />
</section>
