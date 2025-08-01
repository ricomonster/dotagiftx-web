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
  import { DateTime, Image, Price } from '$package/shared';
  import { BoonBadge, ProfileContact } from '$package/user';

  // Lib
  import * as Table from '$lib/components/ui/table';
  // import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';

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
    if (itemId && (!items || items.length === 0)) {
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
</script>

<div class={cn(className)}>
  <Table.Root>
    <Table.Body>
      {#if loading}
        <Table.Row>
          <Table.Cell class="font-medium">Loading...</Table.Cell>
        </Table.Row>
      {:else}
        {#if items && items.length > 0}
          {#each items as item, i (i)}
            <Table.Row class="border-0">
              <Table.Cell>
                <a href={`/profiles/${item.user.steam_id}`} class="flex flex-row items-start gap-2">
                  <Image
                    key={item.user.avatar}
                    dimension="60x60"
                    class="!w-16"
                    type="user" />

                  <div>
                    <div class="flex flex-row items-center space-x-2">
                      <h3 class="font-medium text-lg">{item.user.name}</h3>

                      {#if item.user.boons && item.user.boons.length > 0}
                        {#if item.user.boons.includes('PARTNER_BADGE')}
                          <BoonBadge class="text-xs" boon="PARTNER_BADGE" />
                        {/if}
                        {#if item.user.boons.includes('TRADER_BADGE')}
                          <BoonBadge class="text-xs" boon="TRADER_BADGE" />
                        {/if}
                      {/if}
                    </div>

                    <p class="text-muted-foreground">Posted <DateTime value={item.created_at} /></p>
                  </div>
                </a>
              </Table.Cell>
              <Table.Cell class="w-3">
                <Price class="font-medium text-green-600" value={item.price} />
              </Table.Cell>
              <Table.Cell class="w-4">
                <ProfileContact profile={item.user} />
              </Table.Cell>
            </Table.Row>
          {/each}
        {/if}
      {/if}
    </Table.Body>
  </Table.Root>
</div>
