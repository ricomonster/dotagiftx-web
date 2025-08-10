<script lang="ts">
  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';
</script>

<div class="flex flex-row gap-2">
  <!-- Image Skeleton -->
  <div class="w-[97px] h-[64px]">
    <Skeleton class="w-full aspect-[3/2] flex-shrink-0 border-3" />
  </div>

  <!-- Text Skeletons -->
  <div class="flex-1 space-y-2">
    <Skeleton class="h-4 w-[50%]" />
    <Skeleton class="h-4 w-[20%]" />
  </div>
</div>
