<script lang="ts" module>
  // Interfaces
  import type { Boon } from '$package/dotagiftx';
  import type { BadgeVariant } from '$lib/components/ui/badge';

  interface Props {
    boons: Boon[]
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

  let { boons, class: className }: Props = $props();

  let variant = $state<BadgeVariant>('outline');
  let name = $state<string>('');

  if (boons.includes('PARTNER_BADGE')) {
    className = cn('bg-[var(--gold)] text-white', className);
    name = BOON_MAPPING['PARTNER_BADGE'];
  }

  if (boons.includes('TRADER_BADGE')) {
    className = cn('bg-[var(--sky-blue)] text-white', className);
    name = BOON_MAPPING['TRADER_BADGE'];
  }
</script>

{#if name}
  <a href="/plus">
    <Badge {variant} class={className}>{name}</Badge>
  </a>
{/if}
