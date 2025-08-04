<script lang="ts" module>
  // Interfaces
  import type { User } from '$package/dotagiftx';
  import type { ButtonVariant } from '$lib/components/ui/button';

  interface Props {
    profile: User;
    buttonText?: string;
    class?: string;
    variant?: ButtonVariant;
  }
</script>

<script lang="ts">
  // Lib
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button, buttonVariants } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';

  import ProfileCard from './card.svelte';

  let {
    class: className,
    profile,
    variant = 'outline',
    buttonText = 'Contact seller'
  }: Props = $props();
</script>

<Dialog.Root>
  <Dialog.Trigger class={cn(buttonVariants({ variant }), className, 'cursor-pointer')}>
    {buttonText}
  </Dialog.Trigger>
  <Dialog.Content class="!max-w-4xl translate-y-0 top-[15%]">
    <Dialog.Header>
      <Dialog.Title>Contact Seller</Dialog.Title>
    </Dialog.Header>

    <div class="py-4">
      <ProfileCard {profile} />
    </div>

    <Dialog.Footer>
      <Button variant="link">Seller Profile</Button>
      <Button variant="outline">Steam Profile</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>

