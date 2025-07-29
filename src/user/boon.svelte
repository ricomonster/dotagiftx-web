<script lang="ts" module>
  // Interfaces
  import type { Boon } from '$package/dotagiftx';
  import type { BadgeVariant } from '$lib/components/ui/badge';

  interface Props {
    boon: Boon
    class?: string
  }

  const BOON_MAPPING: Record<Boon, string> = {
    'DEDICATED_POS_5': 'Dedicated Position 5',
    'PARTNER_BADGE': 'Partner',
    'REFRESHER_ORB': 'Refresh Orb',
    'REFRESHER_SHARD': 'Refresher Shard',
    'SHOPKEEPERS_CONTRACT': 'Shopkeepers Contract',
    'TRADER_BADGE': 'Trader',
  };
</script>

<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { cn } from '$lib/utils';

  let { boon, class: className }: Props = $props();

  let variant = $state<BadgeVariant>('outline');

  switch (boon) {
    case 'PARTNER_BADGE':
      className = cn('bg-yellow-600 text-white', className);
      break;

    case 'TRADER_BADGE':
      className = cn('bg-sky-300 text-white', className);
      break;
  }
</script>

<Badge {variant} class={className}>{BOON_MAPPING[boon]}</Badge>
