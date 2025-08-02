<script lang="ts" module>
  import type { Hero } from '$package/dotagiftx';

  interface Props {
    heroes: Hero[];
  }
</script>

<script lang="ts">
  // Packages
  import { HeroAvatar } from '$package/hero';

  // Lib
  import * as Card from '$lib/components/ui/card';

  let { heroes }: Props = $props();
</script>

<Card.Root>
  <Card.Header class="flex flex-row justify-between items-center">
    <h3 class="font-medium text-xl">Trending heroes</h3>
  </Card.Header>
  <Card.Content class="py-0">
    <div class="grid grid-cols-5 gap-4">
      {#each heroes as hero, i (i)}
        <a href={`/search?hero=${hero}`}>
          <HeroAvatar {hero} />
        </a>
      {/each}
    </div>
  </Card.Content>
</Card.Root>
