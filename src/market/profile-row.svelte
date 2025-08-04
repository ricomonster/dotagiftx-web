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

<article class={cn('flex items-start py-1 gap-2', className)}>
  <!-- Left: Avatar -->
  <Image
    key={item.user.avatar}
    dimension="60x60"
    class="!w-12 !md:w-12 shrink-0"
    type="user" />

  <!-- Middle: Name and Meta -->
  <a href={`/profiles/${item.user.steam_id}`} class="flex-1 min-w-0">
    <div class="flex items-center gap-1 min-w-0">
      <div class="truncate font-medium md:text-lg min-w-0">
        {item.user.name}
      </div>

      {#if item.user.boons?.length}
        {#if item.user.boons.includes('PARTNER_BADGE')}
          <BoonBadge class="text-xs shrink-0" boon="PARTNER_BADGE" />
        {/if}
        {#if item.user.boons.includes('TRADER_BADGE')}
          <BoonBadge class="text-xs shrink-0" boon="TRADER_BADGE" />
        {/if}
      {/if}
    </div>

    <p class="text-muted-foreground text-sm truncate">
      Posted <DateTime value={item.created_at} />
    </p>
  </a>

  <!-- Right: Price + Contact -->
  <div class="flex flex-col lg:flex-row lg:items-center gap-1 shrink-0 text-right">
    <Price class="font-medium text-green-600" value={item.price} />

    <ProfileContact
      class="hidden lg:block"
      profile={item.user}
    />
    <ProfileContact
      class="lg:hidden p-0 h-6"
      variant="link"
      buttonText="View"
      profile={item.user}
    />
  </div>
</article>
