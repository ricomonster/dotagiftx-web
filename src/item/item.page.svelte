<script lang="ts" module>
  // Interfaces
  import type { Item } from '$package/dotagiftx';
  import type { PageData } from '$routes/[itemId]/$types';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  // Lib
  import * as Card from '$lib/components/ui/card';
  import * as Tabs from '$lib/components/ui/tabs';

  import ItemImage from './image.svelte';
  import RarityBadge from './rarity.svelte';

  let { data }: Props = $props();
  let item = data.item as Item;
</script>

<svelte:head>
  <title>DotagiftX :: Listings for {item.name}</title>
</svelte:head>

<section class="item-page container mx-auto">
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2">
      <ItemImage key={item.slug} dimension="600x400" class="mx-auto" />
    </div>

    <div class="col-span-2 space-y-4">
      <Card.Root>
        <Card.Header>
          <h1 class="font-bold text-4xl">{item.name}</h1>
          <div>
            <p class="text-xl flex flex-row items-center space-x-2 font-medium">
              <a href={`/search?origin=${item.origin}`}>{item.origin}</a> <RarityBadge rarity={item.rarity} />
            </p>
            <p class="text-muted-foreground text-lg">
              <a href={`/search?hero=${item.hero}`}>{item.hero}</a>
            </p>
          </div>
        </Card.Header>
      </Card.Root>

      <Tabs.Root value="offers" class="w-full justify-between">
        <Tabs.List class="w-full">
          <Tabs.Trigger value="offers">Offers</Tabs.Trigger>
          <Tabs.Trigger value="orders">Orders</Tabs.Trigger>
          <Tabs.Trigger value="activities">Activities</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          Make changes to your account here.
        </Tabs.Content>
        <Tabs.Content value="password">Change your password here.</Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
</section>
