<script lang="ts">
  import { DiamondPlus } from '@lucide/svelte';

  // Lib
  import { Button } from '$lib/components/ui/button';
  import * as NavigationMenu from '$lib/components/ui/navigation-menu';

  // Static
  import brand1x from '$static/brand_1x.png';
// import brand2x from '$static/brand_2x.png';
</script>


<header class="sticky top-0 z-200 bg-white dark:bg-black border-b">
  <div class="max-w-auto mx-auto flex h-16 items-center gap-2 px-4">
    <a href="/" aria-label="DotagiftX">
      <img src={brand1x} alt="DotagiftX"/>
    </a>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <NavigationMenu.Root>
        <NavigationMenu.List>

          <NavigationMenu.Item>
            <NavigationMenu.Link>Treasures</NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link class="flex-row items-center">
              Dotagift<DiamondPlus class="size-4 -ml-1 text-yellow-600" />
            </NavigationMenu.Link>
          </NavigationMenu.Item>

        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Link>
                {#snippet child()}
                  <Button href="/post" variant="outline" size="sm">Post Item</Button>
                {/snippet}
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger>User Img</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <ul class="grid w-[150px] gap-4 p-2">
                  <li>
                    <NavigationMenu.Link href="#">
                      View Profile
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      Listings
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      Orders
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      Feedback
                    </NavigationMenu.Link>
                  </li>

                  <li>
                    <NavigationMenu.Link href="#">
                      Log out
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  </div>
</header>
