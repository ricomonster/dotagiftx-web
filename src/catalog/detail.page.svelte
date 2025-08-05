<script lang="ts" module>
  // Interfaces
  import type { Catalog } from '$package/dotagiftx';
  import type { PageData } from '$routes/[slug]/$types';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  // Packages
  import { RarityBadge } from '$package/item';
  import { Image } from '$package/shared';

  // Lib
  import { Button } from '$lib/components/ui/button';

  import Related from './related.svelte';
  import Tabs from './tabs.svelte';

  let { data }: Props = $props();

  let catalog = data.catalog as Catalog;
</script>

<svelte:head>
  <title>DotagiftX :: Listings for {catalog.name}</title>
</svelte:head>

<section class="catalog-page container mx-auto py-8">
  <div class="grid lg:grid-cols-2 3xl:grid-cols-3 gap-x-10 gap-y-4 px-4">
    <div class="lg:col-span-1 space-y-8 min-w-0">
      <Image
        key={catalog.slug}
        dimension="600x400"
        class="mx-auto w-full"
        type="item" />
      <Related {catalog} />
    </div>
    <div class="lg:col-span-1 3xl:col-span-2 space-y-6 min-w-0">
      <header class="space-y-2">
        <div class="space-y-2">
          <h1 class="font-bold text-4xl mb-2">{catalog.name}</h1>
          <div class="space-x-4 flex flex-row items-center">
            <a href={`/search?origin=${catalog.origin}`} class="font-medium text-2xl">{catalog.origin}</a>
            {#if !['regular'].includes(catalog.rarity)}
              <RarityBadge rarity={catalog.rarity} />
            {/if}
          </div>
        </div>
        <p class="text-xl">
          <span class="text-muted-foreground">Used by:</span> <a href={`/search?hero=${catalog.hero}`}>{catalog.hero}</a>
        </p>
      </header>
      <div class="grid grid-cols-2 gap-4">
        <Button
          href={`/post?s=${catalog.slug}`}
          variant="outline"
          class="gold-button"
          size="lg"
        >
          Post this item
        </Button>
        <Button variant="outline" class="skyblue-button" size="lg">
          Place buy order
        </Button>
      </div>
      <div class="w-full min-w-0">
        <Tabs {catalog} />
      </div>
    </div>
  </div>
</section>
