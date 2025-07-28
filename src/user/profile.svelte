<script lang="ts" module>
  // Interfaces
  import type { User } from '$package/dotagiftx';

  type ProfileView = 'page' | 'contact'

  interface Props {
    profile: User;
    view: ProfileView;
    class?: string;
  }
</script>
<script lang="ts">
  // Packages
  import { DateTime, Image } from '$package/shared';

  // Lib
  // import * as Card from '$lib/components/ui/card';
  import { cn } from '$lib/utils';

  import BoonBadge from './boon.svelte';

  let { profile, view, class: className }:Props = $props();
  console.log(profile.boons);
</script>

<article class={cn('grid grid-cols-5 gap-4', className)}>
  <Image dimension={view === 'contact' ? '120x120' : ''} key={profile.avatar} type="user" />

  <div class="col-span-4 space-y-4">
    <div class="flex flex-row justify-between items-start">
      <h1 class="font-bold text-4xl mb-1">{profile.name}</h1>
      <div class="flex flex-row items-center space-x-4">
        <p class="text-muted-foreground">joined <DateTime value={profile.created_at} /></p>
        {#if profile.boons.includes('PARTNER_BADGE')}
          <BoonBadge class="text-xl" boon="PARTNER_BADGE" />
        {/if}
        {#if profile.boons.includes('TRADER_BADGE')}
          <BoonBadge class="text-xl" boon="TRADER_BADGE" />
        {/if}
      </div>
    </div>
  </div>
</article>
