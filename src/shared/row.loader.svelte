<script lang="ts" module>
  type LoadingItemType = 'item' | 'profile';

  interface Props {
    item: number;
    type: LoadingItemType;
    class?: string;
  }
</script>

<script lang="ts">
  // Lib
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { cn } from '$lib/utils';

  let { class: className, item = 10, type }: Props = $props();
</script>

<div class={cn(className)}>
  {#each {length: item} as _, i (i)}
    <article class="flex items-start gap-2 py-2">
      <!-- Image Skeleton -->
      {#if type === 'profile'}
        <div class="w-12">
          <Skeleton class="w-full aspect-[1/1] flex-shrink-0 border-3" />
        </div>
      {/if}

      {#if type === 'item'}
        <div class="w-22">
          <Skeleton class="w-full h-[60px] aspect-[3/2] flex-shrink-0 border-3" />
        </div>
      {/if}

      <!-- Text Skeletons -->
      <div class="flex-1 space-y-2">
        <Skeleton class="h-4 w-[50%]" />
        <Skeleton class="h-4 w-[20%]" />
      </div>

      <div class="space-y-2 w-[15%] flex flex-col items-end md:flex-row md:items-center md:gap-2 md:space-y-0">
        <Skeleton class="h-4 w-full md:w-[40%]" />
        <Skeleton class="h-4 w-[50%] md:w-[60%]" />
      </div>
    </article>
  {/each}
</div>
