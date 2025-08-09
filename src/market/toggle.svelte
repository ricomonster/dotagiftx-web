<script lang="ts" module>
  // Interfaces
  import type { MarketSort, MarketType, MarketTypeName } from '$package/dotagiftx';

  interface Props {
    type: MarketTypeName | MarketType;
    onsort?(sort: MarketSort): void;
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Lib
  import * as ToggleGroup from '$lib/components/ui/toggle-group';

  let { type, onsort }: Props = $props();
  let value = $state('');

  const handleValueChange = (v: string) => {
    let [_, action, val] = v.split(':');

    if (action === 'sort' && onsort) {
      onsort(val as MarketSort);
    }
  };

  onMount(() => {
    // Set default value
    if (type === 'ask') {
      value = 'ask:sort:lowest';
    }

    if (type === 'bid') {
      value = 'bid:sort:highest';
    }
  });
</script>

<ToggleGroup.Root
  type="single"
  value={value}
  onValueChange={handleValueChange}
  variant="outline"
  class="w-full"
>
  {#if type === 'ask'}
    <ToggleGroup.Item value="ask:sort:lowest">Lowest price</ToggleGroup.Item>
    <ToggleGroup.Item value="ask:sort:recent">Recent</ToggleGroup.Item>
    <ToggleGroup.Item value="ask:sort:best">Top sellers</ToggleGroup.Item>
  {/if}

  {#if type === 'bid'}
    <ToggleGroup.Item value="bid:sort:highest">Highest price</ToggleGroup.Item>
    <ToggleGroup.Item value="bid:sort:recent">Recent</ToggleGroup.Item>
    <ToggleGroup.Item value="bid:sort:best">Top buyers</ToggleGroup.Item>
  {/if}
</ToggleGroup.Root>
