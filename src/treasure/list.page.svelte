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

  let { data }: Props = $props();
  let treasures = data.treasures as Treasure;
</script>

<section class="treasures-page container mx-auto py-8 space-y-6">
  <h1 class="font-bold text-4xl">All Giftable Treasures</h1>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {#each treasures as treasure, i (i)}
      <Card.Root class="p-0 min-w-0">
        <Card.Content class="p-0 space-y-2">
          <a href={`/search?origin=${treasure.treasure}`}>
            <figure>
              <img src={treasure.asset} alt={treasure.treasure} class="w-full rounded object-cover" />
            </figure>
            <h3 class="text-lg font-medium text-center truncate py-2 px-4">{treasure.treasure}</h3>
          </a>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</section>
