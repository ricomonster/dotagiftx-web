<script lang="ts" module></script>
<script lang="ts">
  // Lib
  import * as Card from '$lib/components/ui/card';

  // Packages
  import { CatalogList } from '$package/catalog';
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
  <Card.Root class="lg:col-span-2 xl:col-span-1">
    <Card.Header>
      <h3 class="font-medium text-xl">Trending items</h3>
    </Card.Header>
    <Card.Content class="py-0">
      <CatalogList sort="trending" />
    </Card.Content>
  </Card.Root>

  <Card.Root class="lg:col-span-1">
    <Card.Header class="flex flex-row justify-between items-center">
      <h3 class="font-medium text-xl">New buy orders</h3>
      <a href="/search?sort=recent-bid" class="text-sm">See all</a>
    </Card.Header>
    <Card.Content class="py-0">
      <CatalogList sort="recent-bid" />
    </Card.Content>
  </Card.Root>

  <Card.Root class="lg:col-span-1">
    <Card.Header class="flex flex-row justify-between items-center">
      <h3 class="font-medium text-xl">New sell listings</h3>
      <a href="/search?sort=recent" class="text-sm">See all</a>
    </Card.Header>
    <Card.Content class="py-0">
      <CatalogList sort="recent" />
    </Card.Content>
  </Card.Root>
</div>
