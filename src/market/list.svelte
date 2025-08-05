<script lang="ts" module>
  // Interfaces
  import type {
    Market,
    MarketOptions,
    MarketSort,
    MarketIndex,
    MarketType,
    Hero
  } from '$package/dotagiftx';

  interface Props {
    index: MarketIndex;
    type: MarketType;
    class?: string;
    inventoryStatus?: number;
    itemId?: string;
    items?: Market[];
    sort?: MarketSort;
    status?: number;
    userId?: string;
    hero?: Hero
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Packages
  import { cn } from '$lib/utils';

  import ProfileRow from './profile-row.svelte';

  // Client
  import { getMarket } from './client';

  let {
    class: className,
    index,
    inventoryStatus,
    itemId,
    items,
    sort = 'lowest',
    status = 200,
    type,
    userId,
    hero,
  }: Props = $props();

  let loading = $state(true);

  onMount(async () => {
    if ((itemId || userId) && (!items || items.length === 0)) {
      let opts: MarketOptions = {
        index,
        sort,
        status,
        type,
      };

      if (index === 'item_id') {
        opts.item_id = itemId;
      }

      if (index === 'user_id') {
        opts.user_id = userId;
      }

      if (index === 'hero') {
        opts.hero = hero;
      }

      if (inventoryStatus) {
        opts.inventory_status = inventoryStatus;
      }

      const result = await getMarket(opts);
      items = result.data;
    }

    loading = false;
  });

  console.log(items);
</script>

<div class={cn('w-full min-w-0', className)}>
  {#if loading}
    <p class="p-8 text-center">Loading...</p>
  {:else}
    {#if items && items.length > 0}
      {#each items as item, i (i)}
        {#if index === 'item_id'}
          <ProfileRow {item} />
        {/if}

        {#if index === 'user_id'}

        {/if}
      {/each}
    {/if}
  {/if}
</div>
