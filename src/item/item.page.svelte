<script lang="ts" module>
  // Interfaces
  import type { Item } from '$package/dotagiftx';
  import type { PageData } from '$routes/[itemId]/$types';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  // Packages
  import { Image } from '$package/shared';

  // Lib
  import * as Card from '$lib/components/ui/card';

  import RarityBadge from './rarity.svelte';
  import ItemTabs from './tabs.svelte';

  let { data }: Props = $props();
  let item = data.item as Item;
</script>

<svelte:head>
  <title>DotagiftX :: Listings for {item.name}</title>
</svelte:head>

<section class="item-page container mx-auto p-4">
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-2">
      <Image key={item.slug} dimension="600x400" class="mx-auto w-full" type="item" />
    </div>

    <div class="col-span-3 space-y-4">
      <Card.Root>
        <Card.Header>
          <h1 class="font-bold text-4xl mb-1">{item.name}</h1>
          <div>
            <p class="text-xl flex flex-row items-center space-x-2 font-medium">
              <a href={`/search?origin=${item.origin}`}>{item.origin}</a>
              {#if !['regular'].includes(item.rarity)}
                <RarityBadge rarity={item.rarity} />
              {/if}
            </p>
            <p class="text-muted-foreground text-lg">
              <a href={`/search?hero=${item.hero}`}>{item.hero}</a>
            </p>
          </div>
        </Card.Header>
      </Card.Root>

      <ItemTabs {item} />
    </div>
  </div>
</section>
