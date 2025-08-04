<script lang="ts" module>
  // Interfaces
  import type { Market } from '$package/dotagiftx';

  interface Props {
    item: Market
    class?: string
  }
</script>

<script lang="ts">
  // Packages
  import { Image, Price, DateTime } from '$package/shared';
  import { BoonBadge, ProfileContact } from '$package/user';

  // Libs
  import { cn } from '$lib/utils';

  let { class: className, item }: Props = $props();
</script>

<article class={cn('flex flex-row items-start py-1 justify-between gap-2', className)}>
  <Image
    key={item.user.avatar}
    dimension="60x60"
    class="!w-12 !md:w-12"
    type="user" />

  <a href={`/profiles/${item.user.steam_id}`} class="flex-1">
    <div class="flex flex-row items-center space-x-2">
      <h3 class="font-medium md:text-lg">{item.user.name}</h3>

      {#if item.user.boons && item.user.boons.length > 0}
        {#if item.user.boons.includes('PARTNER_BADGE')}
          <BoonBadge class="text-xs" boon="PARTNER_BADGE" />
        {/if}
        {#if item.user.boons.includes('TRADER_BADGE')}
          <BoonBadge class="text-xs" boon="TRADER_BADGE" />
        {/if}
      {/if}
    </div>

    <p class="text-muted-foreground text-sm">Posted <DateTime value={item.created_at} /></p>
  </a>

  <div class="flex flex-col lg:flex-row lg:items-center">
    <Price class="font-medium text-green-600 text-right" value={item.price} />

    <ProfileContact class="hidden lg:block" profile={item.user} />
    <ProfileContact class="lg:hidden p-0 h-6" variant="link" buttonText="View" profile={item.user} />
  </div>
</article>
