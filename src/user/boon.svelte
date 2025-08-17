<script lang="ts" module>
  // Interfaces
  import type { Boon } from '$package/dotagiftx';
  import type { BadgeVariant } from '$lib/components/ui/badge';

  interface BoonBadge {
    name: string;
    href: string;
    class: string;
  }

  interface Props {
    boons: Boon[];
    class?: string;
  }

  const BOON_MAPPING: Record<Boon, string> = {
    'DEDICATED_POS_5': 'Dedicated Position 5',
    'PARTNER_BADGE': 'Partner',
    'REFRESHER_ORB': 'Refresh Orb',
    'REFRESHER_SHARD': 'Refresher Shard',
    'SHOPKEEPERS_CONTRACT': 'Shopkeepers Contract',
    'TRADER_BADGE': 'Trader',
    'MODERATOR_TAG': 'Moderator'
  };

  const BADGE_CONFIG: Record<string, { class: string; href: string }> = {
    PARTNER_BADGE: { class: 'bg-[var(--gold)] text-white', href: '/plus' },
    TRADER_BADGE: { class: 'bg-[var(--sky-blue)] text-white', href: '/plus' },
    MODERATOR_TAG: { class: 'bg-[var(--purple)] text-white', href: '/moderators' },
  };
</script>

<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { cn } from '$lib/utils';

  let { boons, class: className }: Props = $props();

  let variant = $state<BadgeVariant>('outline');
  let badges = $state<BoonBadge[]>([]);

  for (const boon of boons) {
    if (BADGE_CONFIG[boon]) {
      badges.push({
        ...BADGE_CONFIG[boon],
        name: BOON_MAPPING[boon],
      });
    }
  }
</script>

{#if badges && badges.length > 0}
  {#each badges as badge, i (i)}
    <a href={badge.href}>
      <Badge {variant} class={cn(badge.class, className)}>{badge.name}</Badge>
    </a>
  {/each}
{/if}
