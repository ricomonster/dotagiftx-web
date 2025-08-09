<script lang="ts" module>
  // Interfaces
  import type {
    Market,
    MarketOptions,
    MarketSort,
  } from '$package/dotagiftx';

  interface Props extends MarketOptions {
    items?: Market[];
    class?: string;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Lib
  import * as Pagination from '$lib/components/ui/pagination';
  import { cn } from '$lib/utils';

  import ItemRow from './item-row.svelte';
  import ProfileRow from './profile-row.svelte';
  import Toggle from './toggle.svelte';

  // Client
  import { getMarket } from './client';

  let {
    class: className,
    index,
    inventory_status: inventoryStatus,
    item_id: itemId,
    items,
    limit = 10,
    sort = 'lowest',
    status = 200,
    type,
    user_id: userId,
    hero,
  }: Props = $props();

  // Reactive states
  let initial = $state(false);
  let loading = $state(true);
  let total = $state(0);
  let currentSort = $state(sort);
  let currentPage = $state(1);
  let listItems = $state(items);

  // Fetch data from Market API
  const fetchMarketData = async (): Promise<void> => {
    loading = true;

    const opts: MarketOptions = {
      sort: currentSort,
      status,
      type,
      limit,
      page: currentPage,
      ...(index && { index }),
      ...(index && index === 'item_id' && { item_id: itemId }),
      ...(index && index === 'user_id' && { user_id: userId }),
      ...(index && index === 'hero' && { hero }),
      ...(inventoryStatus && { inventory_status: inventoryStatus }),
    };

    const result = await getMarket(opts);
    listItems = result.data;
    total = result.total_count;

    loading = false;
  };

  // Initial data fetch on mount
  onMount(async () => {
    if ((itemId || userId) && (!items || items.length === 0)) {
      await fetchMarketData();
    }

    initial = true;
    loading = false;
  });

  // Handle sort change
  const handleToggleSort = async (sort: MarketSort): Promise<void> => {
    currentSort = sort;
    initial = false;
    await fetchMarketData();
    initial = true;
  };

  // Handle page change
  const handlePagination = async (value: number): Promise<void> => {
    currentPage = value;
    await fetchMarketData();
  };
</script>

<div class={cn('w-full min-w-0 space-y-4', className)}>
  {#if type && index === 'item_id'}
    <Toggle {type} onsort={handleToggleSort} />
  {/if}

  <div class="w-full min-w-0">
    {#if loading}
      <p class="p-8 text-center">Loading...</p>
    {:else}
      {#if listItems && listItems.length > 0}
        {#each listItems as item, i (i)}
          {#if index === 'item_id'}
            <ProfileRow class="gap-2 py-2" {item} />
          {/if}

          {#if index === 'user_id'}
            <ItemRow class="gap-2 py-2" item={item} />
          {/if}
        {/each}
      {:else}
        <p class="text-center font-lg p-4">No available orders.</p>
      {/if}
    {/if}
  </div>

  {#if initial && listItems && listItems.length > 0}
    <Pagination.Root count={total} perPage={limit} onPageChange={handlePagination} page={currentPage}>
      {#snippet children({ pages, currentPage })}
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.PrevButton />
          </Pagination.Item>
          {#each pages as page (page.key)}
            {#if page.type === 'ellipsis'}
              <Pagination.Item>
                <Pagination.Ellipsis />
              </Pagination.Item>
            {:else}
              <Pagination.Item>
                <Pagination.Link {page} isActive={currentPage === page.value}>
                  {page.value}
                </Pagination.Link>
              </Pagination.Item>
            {/if}
          {/each}
          <Pagination.Item>
            <Pagination.NextButton />
          </Pagination.Item>
        </Pagination.Content>
      {/snippet}
    </Pagination.Root>
  {/if}
</div>
