<script lang="ts">
  import { Search, X } from '@lucide/svelte';

  // Packages
  import { keywords } from '$package/stats';

  // Lib
  import * as Dialog from '$lib/components/ui/dialog';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';

  import CatalogSearchForm from './search.form.svelte';

  let open = $state(false);

  const handleSubmit = (): void => {
    open = false;
  };
</script>


<Dialog.Root bind:open>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="secondary"
        class="md:bg-background md:hover:bg-background text-surface-foreground/60 relative h-9 w-full justify-start pl-2.5 font-normal shadow-none md:w-40 lg:w-56 xl:w-64 cursor-pointer md:cursor-text text-muted-foreground"
        onclick={() => (open = true)}
      >
        <Search />
        <span class="hidden md:inline-flex">Search...</span>
      </Button>
    {/snippet}
  </Dialog.Trigger>

  <Dialog.Content
    class="h-full !max-w-4xl md:h-auto flex flex-col md:grid md:top-[20%] space-y-4"
    showCloseButton={false}
  >
    <CatalogSearchForm
      type="dialog"
      onsubmit={handleSubmit}
      onclear={() => (open = false)} />

    {#if $keywords && $keywords.length > 9}
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Top keywords</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          {#each $keywords as keyword, i (i)}
            <a href={`/search?q=${keyword.keyword}`} class="capitalize" onclick={() => (open = false)}>
              {keyword.keyword}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </Dialog.Content>
</Dialog.Root>
