<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/treasures/$types';
  import type { Treasure } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  // Lib
  import * as Card from '$lib/components/ui/card';

  import TreasureItem from './treasure.svelte';

  let { data }: Props = $props();
  let treasures = data.treasures as Treasure[];
</script>

<section class="treasures-page container mx-auto py-8 space-y-6">
  <h1 class="font-bold text-4xl">All Giftable Treasures</h1>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {#each treasures as treasure, i (i)}
      <Card.Root class="p-0 min-w-0">
        <Card.Content class="p-0 space-y-2">
          <a href={`/search?origin=${treasure.treasure}`}>
            <TreasureItem {treasure} />
          </a>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</section>
