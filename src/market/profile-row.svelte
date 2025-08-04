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
  import { Image, Price } from '$package/shared';
  import { BoonBadge, ProfileContact } from '$package/user';

  // Libs
  import { cn } from '$lib/utils';

  let { class: className, item }: Props = $props();
</script>

<article class={cn('py-1', className)}>
  <a href={`/profiles/${item.user.steam_id}`} class="flex flex-row items-start">
    <Image
      key={item.user.avatar}
      dimension="60x60"
      class="!w-10 !md:w-12"
      type="user" />

    <div class="flex-1 flex flex-row px-2">
      <div>
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
    </div>
  </a>
</article>
