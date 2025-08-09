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

<article class={cn('flex items-start', className)}>
  <Image
    key={item.user.avatar}
    dimension="60x60"
    class="!w-12 !md:w-12 shrink-0"
    boons={item.user.boons}
    type="user" />

  <a href={`/profiles/${item.user.steam_id}`} class="flex-1 min-w-0">
    <div class="flex items-start gap-1 min-w-0">
      <h3 class="truncate font-medium md:text-lg min-w-0">
        {item.user.name}
      </h3>
      {#if item.user.boons && item.user.boons.length}
        <BoonBadge class="text-xs shrink-0 hidden md:block" boons={item.user.boons} />
      {/if}
    </div>
    <div class="flex items-center gap-1 min-w-0">
      {#if item.user.boons && item.user.boons.length}
        <BoonBadge class="text-xs shrink-0 md:hidden" boons={item.user.boons} />
      {/if}
      <p class="text-muted-foreground text-sm truncate min-w-0 flex-1">
        Posted <DateTime value={item.created_at} />
      </p>
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
