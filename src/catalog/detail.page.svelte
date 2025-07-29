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
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { badgeVariants } from '$lib/components/ui/badge';

  import Tabs from './tabs.svelte';

  let { data }: Props = $props();

  let catalog = data.catalog as Catalog;
</script>

<svelte:head>
  <title>DotagiftX :: Listings for {catalog.name}</title>
</svelte:head>

<section class="catalog-page container mx-auto py-8">
  <div class="grid lg:grid-cols-5 gap-8">
    <div class="lg:col-span-2">
      <Image key={catalog.slug} dimension="600x400" class="mx-auto w-full" type="item" />
    </div>

    <div class="lg:col-span-3">
      <div class="grid grid-cols-5 gap-4 py-6">
        <div class="col-span-3">
          <h1 class="font-bold text-4xl mb-2">{catalog.name}</h1>

          <div class="flex flex-row items-center space-x-3">
            <a href={`/search?origin=${catalog.origin}`} class="font-medium text-xl">{catalog.origin}</a>

            {#if !['regular'].includes(catalog.rarity)}
              <RarityBadge rarity={catalog.rarity} />
            {/if}
          </div>

          <p class="text-muted-foreground text-lg mb-1">
            <a href={`/search?hero=${catalog.hero}`}>{catalog.hero}</a>
          </p>

          <a
            class={badgeVariants({ variant: 'outline' })}
            href={`https://liquipedia.net/dota2/${catalog.name.replaceAll(' ', '_')}`}
            target="_blank"
          >
            Dota 2 Wiki
          </a>
        </div>

        <Card.Root class="col-span-1">
          <Card.Header>
            <Card.Description>Reserved</Card.Description>
            <Card.Title class="text-2xl font-semibold tabular-nums">
              {catalog.reserved_count}
            </Card.Title>
          </Card.Header>
        </Card.Root>

        <Card.Root class="col-span-1">
          <Card.Header>
            <Card.Description>Delivered</Card.Description>
            <Card.Title class="text-2xl font-semibold tabular-nums">
              {catalog.sold_count}
            </Card.Title>
          </Card.Header>
        </Card.Root>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <Button
          href={`/post?s=${catalog.slug}`}
          variant="default"
          size="lg"
        >
          Post this item
        </Button>

        <Button variant="secondary" size="lg">
          Place buy order
        </Button>
      </div>

      <Tabs {catalog} />
    </div>
  </div>
</section>
