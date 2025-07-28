<script lang="ts" module>
  import { cn } from '$lib/utils';
  import { API, PATHS } from '$package/dotagiftx/config';

  type ImageType = 'item' | 'user'

  interface Props {
    key: string;
    type: ImageType
    class?: string;
    dimension?: string;
  }
</script>

<script lang="ts">
  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';

  let { key, class: className, dimension, type }: Props = $props();

  let loaded = $state(false);

  let ext = type === 'item' ? '.png' : '';
  let imageUrl = $derived([
    API,
    PATHS.IMAGE.replace(
      ':name',
      [dimension ? [dimension, key].join('/') : key, ext].join('')),
  ].join('/'));
</script>

<figure class={cn(className, 'relative w-full border-2 border-green-500', type === 'item' ? 'aspect-[3/2]' : 'aspect-[1/1]')}>
  {#if !loaded}
    <Skeleton class="absolute inset-0 w-full h-full rounded" />
  {/if}

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
