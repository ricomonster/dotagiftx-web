<script lang="ts" module>
  // Interfaces
  import type { Rarity } from '$package/dotagiftx';
  import type { BadgeVariant } from '$lib/components/ui/badge';

  interface Props {
    rarity: Rarity
    class?: string
  }

  const RARITY_MAPPING: Record<Rarity, string> = {
    'rare' : 'Rare',
    'ultra rare': 'Ultra Rare',
    'regular': 'Regular',
    'very rare': 'Very Rare'
  };
</script>

<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { cn } from '$lib/utils';

  let { rarity, class: className }: Props = $props();

  let variant = $state<BadgeVariant>('outline');

  switch (rarity) {
    case 'rare':
      className = cn('text-green-500', className);
      break;
    case 'ultra rare':
      className = cn('text-yellow-500', className);
      break;
    case 'very rare':
      className = cn('text-orange-500', className);
      break;
  }
</script>

<Badge {variant} class={className}>{RARITY_MAPPING[rarity]}</Badge>
