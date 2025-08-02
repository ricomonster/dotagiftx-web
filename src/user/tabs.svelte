<script lang="ts" module>
  // Interfaces
  import type { Catalog, DotagiftxList, Item } from '$package/dotagiftx';

  interface Props {}
</script>
<script lang="ts">
  // Packages
  // Lib
  import * as Card from '$lib/components/ui/card';
  import * as Tabs from '$lib/components/ui/tabs';

  let {}: Props = $props();
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
      <Tabs.Content value="listing">
      </Tabs.Content>
    </Card.Content>
  </Card.Root>
</Tabs.Root>
