<script lang="ts" module>
  // Interfaces
  import type { Boon, Rarity } from '$package/dotagiftx';

  // Config
  import { API, PATHS } from '$package/dotagiftx/config';

  type ImageType = 'item' | 'user'

  interface Props {
    key: string;
    type: ImageType;
    boons?: Boon[];
    class?: string;
    dimension?: string;
    rarity?: Rarity
  }
</script>

<script lang="ts">
  // Lib
  // import { Skeleton } from '$lib/components/ui/skeleton';
  import { cn } from '$lib/utils';

  let {
    key,
    type,
    boons,
    class: className,
    dimension,
    rarity
  }: Props = $props();

  let loaded = $state(false);

  let ext = type === 'item' ? '.png' : '';
  let imageUrl = $derived([
    API,
    PATHS.IMAGE.replace(
      ':name',
      [dimension ? [dimension, key].join('/') : key, ext].join('')),
  ].join('/'));

  if (type === 'item' && rarity) {
    switch (rarity) {
      case 'rare':
        className = cn('border-green-500', className);
        break;
      case 'ultra rare':
        className = cn('border-yellow-500', className);
        break;
      case 'very rare':
        className = cn('border-orange-500', className);
        break;
    }
  }

  if (type === 'user' && boons && boons.length > 0) {
    if (boons.includes('PARTNER_BADGE')) {
      className = cn('border-[var(--gold)]', className);
    }

    if (boons.includes('TRADER_BADGE')) {
      className = cn('border-[var(--sky-blue)]', className);
    }
  }
</script>

<figure class={cn('relative w-full border-3', type === 'item' ? 'aspect-[3/2]' : 'aspect-[1/1]', className)}>
  <img
    alt={key}
    class:hidden={!loaded}
    class="w-full"
    draggable="false"
    oncontextmenu={(event) => event.preventDefault()}
    onload={() => (loaded = true)}
    src={imageUrl}
  />
</figure>
