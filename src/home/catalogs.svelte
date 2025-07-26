<script lang="ts" module></script>
<script lang="ts">
  // Lib
  import * as Card from '$lib/components/ui/card';

  // Packages
  import { CatalogList } from '$package/catalog';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
  <Card.Root>
    <Card.Header>
      <h3 class="font-medium text-xl">Trending items</h3>
    </Card.Header>
    <Card.Content class="py-0">
      <CatalogList sort="trending" />
    </Card.Content>
  </Card.Root>

  <!-- <Card.Root> -->
  <!--   <Card.Header> -->
  <!--     <h3 class="font-medium text-xl mb-2">Trending heroes</h3> -->
  <!--   </Card.Header> -->
  <!--   <Card.Content> -->
  <!--     <CatalogList sort="popular" /> -->
  <!--   </Card.Content> -->
  <!-- </Card.Root> -->

  <Card.Root>
    <Card.Header>
      <h3 class="font-medium text-xl">New buy orders</h3>
    </Card.Header>
    <Card.Content class="py-0">
      <CatalogList sort="recent-bid" />
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Header>
      <h3 class="font-medium text-xl">New sell listings</h3>
    </Card.Header>
    <Card.Content class="py-0">
      <CatalogList sort="recent" />
    </Card.Content>
  </Card.Root>
</div>
