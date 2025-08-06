<script lang="ts" module>
  import type { Market } from '$package/dotagiftx';

  interface Props {
    item: Market
    class?: string;
  }
</script>

<script lang="ts">
  // Packages
  import { RarityBadge } from '$package/item';
  import { Image, Price, DateTime } from '$package/shared';
  import { ProfileContact } from '$package/user';

  // Lib
  import { cn } from '$lib/utils';

  let { class: className, item }: Props = $props();
  console.log(item);
</script>

<article class={cn('flex items-start py-1 gap-2', className)}>
  <!-- Left: Avatar -->
  <Image
    key={item.item.slug}
    dimension="97x75"
    class="!w-22 shrink-0"
    type="item" />

  <a href={`/${item.item.slug}`} class="flex-1 min-w-0">
    <h3 class="truncate font-medium md:text-lg min-w-0 flex-1 lg:flex-none">
      {item.item.name}
    </h3>

    <div class="flex items-start min-w-0 gap-1">
      <span class="text-muted-foreground">{item.item.hero}</span>
      {#if !['regular'].includes(item.item.rarity)}
        <RarityBadge class="shrink-0" rarity={item.item.rarity} />
      {/if}
    </div>
  </a>

  <div class="flex flex-col md:flex-row md:items-center md:gap-2 shrink-0 text-right">
    <Price class="font-medium text-green-600" value={item.price} />
    <ProfileContact
      class="hidden md:block"
      profile={item.user}
    />
    <ProfileContact
      class="md:hidden p-0 h-6"
      variant="link"
      buttonText="View"
      profile={item.user}
    />
  </div>
</article>
