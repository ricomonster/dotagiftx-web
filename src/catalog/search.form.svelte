<script lang="ts" module>
  type SearchFormType = 'page' | 'dialog'

  interface Props {
    type?: SearchFormType
    onclear?(): void
    onsubmit?(): void
  }
</script>

<script lang="ts">
  import { Search, X, ArrowRight } from '@lucide/svelte';

  // Lib
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';

  let { type = 'page', onclear, onsubmit }: Props = $props();

  let q = $state<string>('');

  // Handles when the X button is clicked.
  const handleXButton = (): void => {
    if (type === 'page') {
      // Just clear the q state
      q = '';
    }

    if (type === 'dialog' && onclear) {
      onclear();
    }
  };

  // Handles the form submission event.
  const handleOnSubmit = (): void => {
    if (type === 'dialog' && onsubmit) {
      onsubmit();
      return;
    }
  };
</script>

<form method="GET" action="/search" onsubmit={handleOnSubmit}>
  <div class="flex items-center gap-2 w-full">
    <div class="relative w-full">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        class={cn('!text-lg w-full pl-10 pr-10 h-14', type === 'page' ? '!bg-white text-background' : '')}
        name="q"
        placeholder="Search for item, hero, or treasure"
        type="text"
        bind:value={q}
      />

      <div class="absolute right-1 top-1/2 -translate-y-1/2 flex flex-row items-center">
        <Button
          variant="ghost"
          class={cn(
            'bg-transparent border border-transparent text-muted-foreground cursor-pointer',
            type === 'page' && q.length === 0 ? 'hidden' : '',
            type === 'page' ? 'hover:!bg-white' : 'hover:bg-accent',
          )}
          onclick={handleXButton}
        >
          <X class="!w-6 !h-6" />
        </Button>

        <Button
          type="submit"
          variant="ghost"
          class={cn(
            'bg-transparent border border-transparent text-muted-foreground cursor-pointer',
            type === 'page' ? 'hover:!bg-white' : 'hover:bg-accent',
          )}
        >
          <ArrowRight class="!w-6 !h-6" />
        </Button>
      </div>
    </div>
  </div>
</form>
