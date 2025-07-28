<script lang="ts" module>
  // Interfaces
  import type { DotagiftxList, Item, Market } from '$package/dotagiftx';

  interface Props {
    initial: DotagiftxList<Market[]>
    item: Item,
  }
</script>
<script lang="ts">
  // Packages
  import { MarketList } from '$package/market';

  // Lib
  import * as Card from '$lib/components/ui/card';
  import * as Tabs from '$lib/components/ui/tabs';

  let { item, initial }: Props = $props();
</script>

<Tabs.Root value="offers" class="w-full justify-between">
  <Tabs.List class="w-full">
    <Tabs.Trigger value="offers">Offers</Tabs.Trigger>
    <Tabs.Trigger value="orders">Orders</Tabs.Trigger>
    <Tabs.Trigger value="activities">Activities</Tabs.Trigger>
  </Tabs.List>

  <Card.Root>
    <Card.Content>
      <Tabs.Content value="offers">
        <MarketList
          inventoryStatus={200}
          itemId={item.id}
          items={initial}
          sort="lowest"
          type={10} />
      </Tabs.Content>

      <Tabs.Content value="orders">Orders</Tabs.Content>
      <Tabs.Content value="activities">Activities</Tabs.Content>
    </Card.Content>
  </Card.Root>
</Tabs.Root>
