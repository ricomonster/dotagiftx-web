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
  import { Badge } from '$lib/components/ui/badge';
  import { cn } from '$lib/utils';

  import BoonBadge from './boon.svelte';

  let { profile, view, class: className }:Props = $props();
</script>

<article class={cn(className)}>
</article>
