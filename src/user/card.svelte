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

<Card.Root class={className}>
  <Card.Header class="flex flex-row gap-4">
    <Image key={profile.avatar} type="user" class="!w-20 shrink-0" boons={profile.boons} />
    <div class="flex-1 min-w-0">
      <h1 class="font-bold text-4xl truncate">{profile.name}</h1>
      <div class="mt-1">
        <p class="text-lg">{profile.steam_id}</p>
        <p class="text-muted-foreground">joined <DateTime value={profile.created_at} /></p>
      </div>
    </div>
  </Card.Header>
  <Card.Content class="space-y-2 py-0">
    <div class="space-x-2">
      <a href={`/profiles/${profile.steam_id}`}>{profile.market_stats.live} items</a>·
      <a href={`/profiles/${profile.steam_id}/reserved`}>{profile.market_stats.reserved} reserved</a>·
      <a href={`/profiles/${profile.steam_id}/delivered`}>{profile.market_stats.sold} delivered</a>·
      <a href={`/profiles/${profile.steam_id}/bought`}>{profile.market_stats.bid_completed} bought</a>
    </div>

    {#if profile.boons && profile.boons.length > 0}
      <div class="space-x-1">
        <BoonBadge class="text-md font-medium" boons={profile.boons} />
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

    {#if profile.notes}
      <div>
        <p class="text-muted-foreground">Notes:</p>
        <p class="text-lg text-sky-300">{profile.notes}</p>
      </div>
    {/if}
  </Card.Content>
</Card.Root>
