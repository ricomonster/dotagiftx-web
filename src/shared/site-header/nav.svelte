<script lang="ts" module>
  interface Props {
    class?: string
  }
</script>

<script lang="ts">
  import { DiamondPlus } from '@lucide/svelte';

  // Lib
  import * as NavigationMenu from '$lib/components/ui/navigation-menu';

  let { class: className }: Props = $props();
</script>
<NavigationMenu.Root class={className}>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link class="text-white font-bold">
        {#snippet child({ props })}
          <a href="/treasures" {...props}>Treasures</a>
        {/snippet}
      </NavigationMenu.Link>
    </NavigationMenu.Item>

    <NavigationMenu.Item>
      <NavigationMenu.Link class="font-bold">
        {#snippet child({ props })}
          <a {...props} href="/plus">
            <span class="flex flex-row items-center gap-1">Dotagift<DiamondPlus class="size-4 text-yellow-600" /></span>
          </a>
        {/snippet}
      </NavigationMenu.Link>
    </NavigationMenu.Item>

  </NavigationMenu.List>
</NavigationMenu.Root>
