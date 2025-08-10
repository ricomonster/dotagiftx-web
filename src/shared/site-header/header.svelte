<script lang="ts">

  // Packages
  import { CatalogSearchDialog } from '$package/catalog';

  // Lib
  import { Button } from '$lib/components/ui/button';

  // Icon
  import SteamIcon from './../steam-icon.svelte';

  import MobileNav from './mobile-nav.svelte';
  import Nav from './nav.svelte';
</script>

<header class="bg-[var(--header-bg-color)] sticky top-0 z-50 w-full !border-b-1">
  <div class="container-wrapper 3xl:fixed:px-0 px-6 py-2">
    <div class="3xl:fixed:container h-(--header-height) flex items-center gap-2">
      <MobileNav class="flex lg:hidden" />
      <Button href="/" variant="ghost" class="hidden lg:flex">
        <img src="/brand_1x.png" alt="DotagiftX" />
        <span class="sr-only">DotagiftX</span>
      </Button>
      <Nav class="hidden lg:block" />

      <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
        <div class="w-full flex-1 md:flex md:w-auto md:flex-none relative">
          <CatalogSearchDialog />
        </div>

        <Button href="/post" variant="outline" class="hidden md:block gold-button !bg-[var(--header-bg-color)]">Post Item</Button>
        <Button href="/login" variant="ghost" class="hidden md:flex flex-row items-center">
          <SteamIcon /> Sign in
        </Button>
      </div>
    </div>
  </div>
</header>
