<script lang="ts" module>
  interface Props {
    vertical?: boolean
  }
</script>

<script lang="ts">
  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';

  let { vertical = false }: Props = $props();
</script>

<div class={vertical
  ? 'flex flex-col gap-2'
  : 'flex flex-col md:flex-row gap-2'
}>
  <!-- Image Skeleton -->
  <Skeleton class={vertical
    ? 'w-full aspect-[3/2]'
    : 'w-full md:w-1/5 aspect-[3/2] flex-shrink-0'
  } />

  <!-- Text Skeletons -->
  <div class="flex-1 space-y-2">
    <Skeleton class="h-4 w-[50%]" />
    <Skeleton class="h-4 w-[20%]" />
  </div>
</div>
