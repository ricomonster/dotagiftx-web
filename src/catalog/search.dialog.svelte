<script lang="ts" module>
</script>

<script lang="ts">
  // Lib
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button } from '$lib/components/ui/button';

  let open = $state(false);
</script>


<Dialog.Root bind:open>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="secondary"
        onclick={() => (open = true)}
      >
        Search
      </Button>
    {/snippet}
  </Dialog.Trigger>

  <Dialog.Content>
    <Dialog.Header class="sr-only">
      <Dialog.Title>Search documentation...</Dialog.Title>
      <Dialog.Description>Search for a command to run...</Dialog.Description>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>
