<script lang="ts" module>
  import { cn } from '$lib/utils';
  import { API, PATHS } from '$package/dotagiftx/config';

  interface Props {
    key: string;
    class?: string;
    dimension?: string;
  }
</script>

<script lang="ts">
  let { key, class: className, dimension }: Props = $props();

  let imageUrl = $derived([
    API,
    PATHS.IMAGE.replace(':name', [dimension ? [dimension, key].join('/') : key, '.png'].join('')),
  ].join('/'));
</script>

<img
  src={imageUrl}
  class={cn('border-2 border-green-500', className)}
  alt={key} />
