<script lang="ts" module>
  // Interfaces
  import type { Market, MarketOptions, MarketSort } from '$package/dotagiftx';

  interface Props {
    itemId: string;
    type: number;
    class?: string;
    inventoryStatus?: number;
    sort?: MarketSort;
    status?: number;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Packages
  import { DateTime, Image, Price } from '$package/shared';

  // Lib
  import * as Table from '$lib/components/ui/table';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';

  // Client
  import { getMarket } from './client';

  let {
    class: className,
    itemId,
    type,
    sort = 'lowest',
    inventoryStatus,
    status = 200,

  }: Props = $props();

  let loading = $state(true);
  let marketItems = $state<Market[]>([]);

  onMount(async () => {
    if (itemId) {
      let opts: MarketOptions = {
        index: 'item_id',
        item_id: itemId,
        sort,
        status,
        type,
      };

      if (inventoryStatus) {
        opts.inventory_status = inventoryStatus;
      }

      const result = await getMarket(opts);

      marketItems = result.data;

      loading = false;
    }
  });
</script>

<div class={cn(className)}>
  <Table.Root>
    <Table.Body>
      {#if loading}
        <Table.Row>
          <Table.Cell class="font-medium">Loading...</Table.Cell>
        </Table.Row>
      {:else}
        {#if marketItems.length > 0}
          {#each marketItems as mi, i (i)}
            <Table.Row>
              <Table.Cell width="60px">
                <Image key={mi.user.avatar} dimension="60x60" class="w-full" type="user" />
              </Table.Cell>
              <Table.Cell>
                <div class="">
                  <h3 class="font-medium text-lg">{mi.user.name}</h3>
                </div>
                <p class="text-muted-foreground">Posted <DateTime value={mi.created_at} /></p>
              </Table.Cell>
              <Table.Cell class="w-3">
                <Price class="font-medium text-green-900" value={mi.price} />
              </Table.Cell>
              <Table.Cell class="w-4">
                <Button>Contact seller</Button>
              </Table.Cell>
            </Table.Row>
          {/each}
        {/if}
      {/if}
    </Table.Body>
  </Table.Root>
</div>
