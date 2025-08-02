<script lang="ts" module>
  import type { User } from '$package/dotagiftx';

  interface Props {
    profile: User;
    class?: string;
  }
</script>

<script lang="ts">
  // Packages
  import { DateTime, Image } from '$package/shared';

  // Lib
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';

  import BoonBadge from './boon.svelte';

  let { profile, class: className }: Props = $props();
</script>

<Card.Root>
  <Card.Header class="flex flex-row gap-4">
    <Image key={profile.avatar} type="user" class="!w-50" />
    <div class="flex-1">
      <h1 class="font-bold text-4xl mb-2">{profile.name}</h1>
      <div class="mt-2">
        <p class="text-lg">{profile.steam_id}</p>
        <p class="text-muted-foreground">joined <DateTime value={profile.created_at} /></p>
      </div>
    </div>
  </Card.Header>
  <Card.Content class="space-y-2 py-0">
    <div class="space-x-2">
      <span>{profile.market_stats.live} items</span>·
      <span>{profile.market_stats.reserved} reserved</span>·
      <span>{profile.market_stats.sold} delivered</span>·
      <span>{profile.market_stats.bid_completed} bought</span>
    </div>

    {#if profile.boons && profile.boons.length > 0}
      <div>
        {#if profile.boons.includes('PARTNER_BADGE')}
          <BoonBadge class="text-md font-medium" boon="PARTNER_BADGE" />
        {/if}
        {#if profile.boons.includes('TRADER_BADGE')}
          <BoonBadge class="text-md font-medium" boon="TRADER_BADGE" />
        {/if}
      </div>
    {/if}

    <div class="space-y-2">
      <Button
        href={`https://steamcommunity.com/profiles/${profile.steam_id}`}
        size="sm"
        target="_blank"
        variant="outline"
      >
        Steam Profile
      </Button>
      <Button
        href={`https://steamrep.com/profiles/${profile.steam_id}`}
        size="sm"
        target="_blank"
        variant="outline"
      >
        SteamRep
      </Button>
      <Button
        href={`https://www.dotabuff.com/players/${profile.steam_id}`}
        size="sm"
        target="_blank"
        variant="outline"
      >
        Dotabuff
      </Button>
    </div>
  </Card.Content>
</Card.Root>
