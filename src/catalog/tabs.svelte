<script lang="ts" module>
  // Interfaces
  import type { MarketType, Catalog, DotagiftxList } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
  }
</script>
<script lang="ts">
  // Packages
  import { MarketList } from '$package/market';

  // Lib
  import { Badge } from '$lib/components/ui/badge';
  import * as Card from '$lib/components/ui/card';
  import * as Tabs from '$lib/components/ui/tabs';

  let { catalog }: Props = $props();
</script>

<Tabs.Root value="offers" class="w-full justify-between">
  <Tabs.List class="w-full">
    <Tabs.Trigger value="offers">Offers <Badge variant="outline">{catalog.quantity}</Badge></Tabs.Trigger>
    <Tabs.Trigger value="orders">Orders <Badge variant="outline">{catalog.bid_count}</Badge></Tabs.Trigger>
    <Tabs.Trigger value="activities">Activities</Tabs.Trigger>
  </Tabs.List>

  <Card.Root>
    <Card.Content>
      <Tabs.Content value="offers">
        <MarketList
          index="item_id"
          item_id={catalog.id}
          items={catalog.asks}
          sort="lowest"
          total={catalog.quantity}
          type="ask" />
      </Tabs.Content>

      <Tabs.Content value="orders">
        <MarketList
          index="item_id"
          item_id={catalog.id}
          sort="highest"
          type="bid" />
      </Tabs.Content>

      <Tabs.Content value="activities">Activities</Tabs.Content>
    </Card.Content>
  </Card.Root>
</Tabs.Root>
