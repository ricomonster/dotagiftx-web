<script lang="ts" module>
  // Interfaces
  import type { Catalog, DotagiftxList, Item, User } from '$package/dotagiftx';

  interface Props {
    profile: User
  }
</script>
<script lang="ts">
  // Packages
  import { MarketList } from '$package/market';
  // Lib
  import * as Card from '$lib/components/ui/card';
  import * as Tabs from '$lib/components/ui/tabs';

  let { profile }: Props = $props();
</script>

<Tabs.Root value="listing" class="w-full justify-between">
  <Tabs.List class="w-full">
    <Tabs.Trigger value="listing">Listing</Tabs.Trigger>
    <Tabs.Trigger value="reserved">Reserved</Tabs.Trigger>
    <Tabs.Trigger value="delivered">Delivered</Tabs.Trigger>
    <Tabs.Trigger value="bought">Bought</Tabs.Trigger>
    <Tabs.Trigger class="md:hidden" value="activities">Activities</Tabs.Trigger>
  </Tabs.List>

  <Card.Root>
    <Card.Content>
      <Tabs.Content value="listing" class="w-full min-w-0">
        <MarketList
          class="w-full min-w-0"
          index="user_id"
          sort="created_at:desc"
          userId={profile.id}
          type="ask" />
      </Tabs.Content>

      <Tabs.Content value="reserved" class="w-full min-w-0">
        <MarketList
          class="w-full min-w-0"
          index="user_id"
          userId={profile.id}
          sort="updated_at:desc"
          status={300} />
      </Tabs.Content>

      <Tabs.Content value="delivered" class="w-full min-w-0">
        <MarketList
          class="w-full min-w-0"
          index="user_id"
          userId={profile.id}
          sort="updated_at:desc"
          status={400} />
      </Tabs.Content>

      <Tabs.Content value="bought" class="w-full min-w-0">
        <MarketList
          class="w-full min-w-0"
          index="user_id"
          userId={profile.id}
          sort="updated_at:desc"
          status={410} />
      </Tabs.Content>
    </Card.Content>
  </Card.Root>
</Tabs.Root>
