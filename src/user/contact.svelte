<script lang="ts" module>
  // Interfaces
  import type { User } from '$package/dotagiftx';

  interface Props {
    profile: User
  }
</script>

<script lang="ts">
  // Lib
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button, buttonVariants } from '$lib/components/ui/button';

  import Profile from './profile.svelte';

  let { profile }: Props = $props();
</script>

<Dialog.Root>
  <Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>
    Contact seller
  </Dialog.Trigger>
  <Dialog.Content class="!max-w-4xl translate-y-0 top-[15%]">
    <Dialog.Header>
      <Dialog.Title>Contact Seller</Dialog.Title>
    </Dialog.Header>

    <div class="py-4">
      <Profile {profile} view="contact" />
    </div>

    <Dialog.Footer>
      <Button variant="link">Seller Profile</Button>
      <Button variant="outline">Steam Profile</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>

