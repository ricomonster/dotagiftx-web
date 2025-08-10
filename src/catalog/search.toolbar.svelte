<script lang="ts" module>
  // Interfaces
  import type { CatalogSort } from '$package/dotagiftx';

  type CatalogSearchLayout = 'list' | 'grid'

  interface Props {
    total: number;
    layout?: CatalogSearchLayout;
    q?: string;
    sort?: CatalogSort
    class?: string;
    onsort?(sort: CatalogSort): void;
    onlayout?(layout: CatalogSearchLayout): void;
  }

  const SORT_OPTIONS: { label: string, sort: CatalogSort }[] = [
    { label: 'Most Popular', sort: 'popular' },
    { label: 'New Offers', sort: 'recent' },
    { label: 'New Buy Offers', sort: 'recent-bid' }
  ];
</script>

<script lang="ts">
  import { CheckIcon, List, LayoutGrid } from '@lucide/svelte';

  // Lib
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import * as ToggleGroup from '$lib/components/ui/toggle-group';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';

  let {
    class: className,
    layout = 'list',
    q,
    sort = 'popular',
    total,
    onlayout,
    onsort
  }: Props = $props();

  const handleSortSelect = (value: CatalogSort): void => {
    sort = value;

    if (onsort) {
      onsort(value);
    }
  };

  const handleLayoutChange = (value: string): void => {
    if (onlayout) {
      onlayout(value as CatalogSearchLayout);
    }
  };
</script>

<section class={cn('flex flex-row justify-between items-center', className)}>
  <p class="text-lg font-bold">{total || 0} results for "{q}"</p>
  <div class="gap-2 flex">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Button {...props} variant="outline">
            Sorted by: {#each SORT_OPTIONS as so, i (i)}{#if so.sort === sort}{so.label}{/if}{/each}
          </Button>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-(--bits-dropdown-menu-anchor-width)" align="start">
        <DropdownMenu.Group>
          {#each SORT_OPTIONS as so, i (i)}
            <DropdownMenu.Item onSelect={() => handleSortSelect(so.sort)}>
              {so.label}

              {#if sort === so.sort}
                <CheckIcon class="ml-auto" />
              {/if}
            </DropdownMenu.Item>
          {/each}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <ToggleGroup.Root
      type="single"
      value={layout}
      variant="outline"
      onValueChange={handleLayoutChange}
    >
      <ToggleGroup.Item value="list">
        <List class="size-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="grid">
        <LayoutGrid class="size-4" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </div>
</section>
