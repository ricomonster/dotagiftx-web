<script lang="ts" module>
  // Interfaces
  import type { Hero } from '$package/dotagiftx';

  interface Props {
    hero: Hero
    class?: string
  }
</script>

<script lang="ts">
  // Package
  import { getHero } from '$package/dotagiftx';

  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { cn } from '$lib/utils';

  let { hero, class: className }: Props = $props();

  let loaded = $state(false);

  const { image_hero: imageUrl } = getHero(hero);
</script>

<figure class={cn('relative', className)}>
  {#if !loaded}
    <Skeleton class="absolute inset-0 w-full h-full rounded" />
  {/if}
  <img
    alt={hero}
    class:hidden={!loaded}
    class="w-full rounded border-3"
    draggable="false"
    oncontextmenu={(event) => event.preventDefault()}
    onload={() => (loaded = true)}
    src={imageUrl} />
</figure>
