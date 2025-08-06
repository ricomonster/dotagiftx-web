<script lang="ts">
  import { DiamondPlus } from '@lucide/svelte';

  // Packages
  import { CatalogSearchDialog } from '$package/catalog';

  // Lib
  import { Button } from '$lib/components/ui/button';

  // Icon
  import SteamIcon from './../steam-icon.svelte';

  import MobileNav from './mobile-nav.svelte';

</script>

<header class="bg-[var(--header-bg-color)] sticky top-0 z-50 w-full">
  <div class="container-wrapper 3xl:fixed:px-0 px-6 py-4">
    <div class="3xl:fixed:container h-(--header-height) **:data-[slot=separator]:!h-4 flex items-center gap-2">
      <MobileNav class="flex lg:hidden" />
      <Button href="/" variant="ghost" class="hidden lg:flex">
        <img src="/brand_1x.png" alt="DotagiftX" />
        <span class="sr-only">DotagiftX</span>
      </Button>
      <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
        <div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
          <!-- <CommandMenu {colors} /> -->
          <CatalogSearchDialog />
        </div>

        <Button href="/post" variant="outline" class="gold-button !bg-[var(--header-bg-color)]">Post Item</Button>
        <Button href="/login" variant="ghost" class="flex-row items-center">
          <SteamIcon /> Sign in
        </Button>
      </div>
    </div>
  </div>
</header>
<!-- <header class="sticky top-0 z-200 bg-[var(--header-bg-color)] border-b"> -->
<!--   <div class="max-w-auto mx-auto flex h-16 items-center gap-2 px-4"> -->
<!--     <a href="/" aria-label="DotagiftX"> -->
<!--       <img src="/brand_1x.png" alt="DotagiftX"/> -->
<!--     </a> -->
<!---->
<!--     <div class="flex flex-1 items-center justify-end md:justify-between"> -->
<!--       <NavigationMenu.Root> -->
<!--         <NavigationMenu.List> -->
<!---->
<!--           <NavigationMenu.Item> -->
<!--             <NavigationMenu.Link class="text-white">Treasures</NavigationMenu.Link> -->
<!--           </NavigationMenu.Item> -->
<!---->
<!--           <NavigationMenu.Item> -->
<!--             <NavigationMenu.Link class="flex-row items-center"> -->
<!--               Dotagift<DiamondPlus class="size-4 -ml-1 text-yellow-600" /> -->
<!--             </NavigationMenu.Link> -->
<!--           </NavigationMenu.Item> -->
<!---->
<!--         </NavigationMenu.List> -->
<!--       </NavigationMenu.Root> -->
<!---->
<!--       <div> -->
<!--         <NavigationMenu.Root> -->
<!--           <NavigationMenu.List class="gap-2"> -->
<!--             <NavigationMenu.Item> -->
<!--               <NavigationMenu.Link> -->
<!--                 {#snippet child()} -->
<!--                   <Button href="/post" variant="outline" class="gold-button !bg-[var(--header-bg-color)]">Post Item</Button> -->
<!--                 {/snippet} -->
<!--               </NavigationMenu.Link> -->
<!--             </NavigationMenu.Item> -->
<!---->
<!--             <NavigationMenu.Item> -->
<!--               <NavigationMenu.Link> -->
<!--                 {#snippet child()} -->
<!--                   <Button href="/login" variant="outline" class="flex-row items-center"> -->
<!--                     <SteamIcon /> Sign in -->
<!--                   </Button> -->
<!--                 {/snippet} -->
<!--               </NavigationMenu.Link> -->
<!--             </NavigationMenu.Item> -->
<!---->
<!--             <NavigationMenu.Item class="hidden"> -->
<!--               <NavigationMenu.Trigger>User Img</NavigationMenu.Trigger> -->
<!--               <NavigationMenu.Content> -->
<!--                 <ul class="grid w-[150px] gap-4 p-2"> -->
<!--                   <li> -->
<!--                     <NavigationMenu.Link href="#"> -->
<!--                       View Profile -->
<!--                     </NavigationMenu.Link> -->
<!--                     <NavigationMenu.Link href="#"> -->
<!--                       Listings -->
<!--                     </NavigationMenu.Link> -->
<!--                     <NavigationMenu.Link href="#"> -->
<!--                       Orders -->
<!--                     </NavigationMenu.Link> -->
<!--                     <NavigationMenu.Link href="#"> -->
<!--                       Feedback -->
<!--                     </NavigationMenu.Link> -->
<!--                   </li> -->
<!---->
<!--                   <li> -->
<!--                     <NavigationMenu.Link href="#"> -->
<!--                       Log out -->
<!--                     </NavigationMenu.Link> -->
<!--                   </li> -->
<!--                 </ul> -->
<!--               </NavigationMenu.Content> -->
<!--             </NavigationMenu.Item> -->
<!--           </NavigationMenu.List> -->
<!--         </NavigationMenu.Root> -->
<!--       </div> -->
<!--     </div> -->
<!--   </div> -->
<!-- </header> -->
