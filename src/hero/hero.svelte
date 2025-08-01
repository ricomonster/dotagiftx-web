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

  let { hero, class: className }: Props = $props();

  const { image_hero: imageUrl } = getHero(hero);
</script>

<figure class={className}>
  <img src={imageUrl} alt={hero} />
</figure>
