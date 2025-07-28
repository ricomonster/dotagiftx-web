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
  import * as Card from '$lib/components/ui/card';
  import { cn } from '$lib/utils';

  let { profile, view, class: className }:Props = $props();
</script>

<article class={cn('grid grid-cols-5 gap-4', className)}>
  <Image dimension={view === 'contact' ? '120x120' : ''} key={profile.avatar} type="user" />

  <div class="col-span-4 space-y-4">

    <Card.Root>
      <Card.Header class="flex flex-row justify-between items-start">
        <h1 class="font-bold text-4xl mb-1">{profile.name}</h1>
        <div class="">
          <p class="text-muted-foreground">joined <DateTime value={profile.created_at} /></p>
        </div>
      </Card.Header>
    </Card.Root>
  </div>
</article>
