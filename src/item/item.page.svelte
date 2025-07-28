<script lang="ts" module>
  // Interfaces
  import type { DotagiftxList, Item, Market } from '$package/dotagiftx';
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
  import { badgeVariants } from '$lib/components/ui/badge';

  import RarityBadge from './rarity.svelte';
  import ItemTabs from './tabs.svelte';

  let { data }: Props = $props();

  let item = data.item as Item;
  let offers = data.offers as DotagiftxList<Market[]>;
</script>

<svelte:head>
  <title>DotagiftX :: Listings for {item.name}</title>
</svelte:head>

<section class="item-page container mx-auto py-8">
  <div class="grid grid-cols-5 gap-8">
    <div class="col-span-2">
      <Image key={item.slug} dimension="600x400" class="mx-auto w-full" type="item" />
    </div>

    <div class="col-span-3">
      <div class="grid grid-cols-6 py-6 gap-4">
        <div class="col-span-4">
          <h1 class="font-bold text-4xl">{item.name}</h1>
          <div class="mt-1">
            <p class="text-xl flex flex-row items-center space-x-2 font-medium">
              <a href={`/search?origin=${item.origin}`}>{item.origin}</a>
              {#if !['regular'].includes(item.rarity)}
                <RarityBadge rarity={item.rarity} />
              {/if}
            </p>
            <p class="text-muted-foreground text-lg mb-1">
              <a href={`/search?hero=${item.hero}`}>{item.hero}</a>
            </p>
            <a
              class={badgeVariants({ variant: 'outline' })}
              href={`https://liquipedia.net/dota2/${item.name.replace(' ', '_')}`}
              target="_blank"
            >
              Dota 2 Wiki
            </a>
          </div>
        </div>

        <Card.Root class="col-span-1">
          <Card.Header>
            <Card.Description>Reserved</Card.Description>
            <Card.Title class="text-2xl font-semibold tabular-nums">
              28
            </Card.Title>
          </Card.Header>
        </Card.Root>

        <Card.Root class="col-span-1">
          <Card.Header>
            <Card.Description>Delivered</Card.Description>
            <Card.Title class="text-2xl font-semibold tabular-nums">
              378
            </Card.Title>
          </Card.Header>
        </Card.Root>
      </div>

      <ItemTabs {item} initial={offers} />
    </div>
  </div>
</section>
