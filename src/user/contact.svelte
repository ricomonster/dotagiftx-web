<script lang="ts" module>
  import { SearchIcon } from '@lucide/svelte';

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
  import * as Card from '$lib/components/ui/card';
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
  <Dialog.Content class="!max-w-4xl translate-y-0 top-0 bottom-0 md:top-[15%] md:bottom-auto">
    <Dialog.Header>
      <Dialog.Title>Contact Seller</Dialog.Title>
    </Dialog.Header>

    <ProfileCard {profile} class="py-4" />

    <Card.Root>
      <Card.Content class="space-y-2">
        <h4 class="text-lg font-bold">Guides for buying Giftables</h4>
        <ul class="list-disc px-4 md:px-8 space-y-4 text-muted-foreground">
          <li>
            Always check the item or set availability on seller's Dota 2
            <a href={`https://steamcommunity.com/profiles/${profile.steam_id}#570`} class="underline text-white">inventory</a>.
          </li>

          <li>
            Ask seller to <span class="text-white">Reserve</span> the item to your profile.
            This can be use later for <span class="text-white">Scam Report</span> and
            <a href="/orders" class="underline text-white">order details</a> to avoid impersonation.
          </li>

          <li>
            Dota 2 Giftables transaction only viable if the two steam user parties have been friends for 30 days.
          </li>

          <li>
            As Giftables involves a party having to go first, please always check seller's reputation through
            <a href={`https://steamrep.com/profiles/${profile.steam_id}`} class="text-underline text-white">SteamRep</a>
            and <a href={`/profiles/${profile.steam_id}/delivered`} class="underline text-white">transaction history</a>.
          </li>

          <li>
            If you need a middleman, I only suggest you get <a href="/middleman" class="text-gold">Middleman here</a>.
          </li>
        </ul>
      </Card.Content>
    </Card.Root>

    <Dialog.Footer class="flex-col md:flex-row">
      <Button href={`/profiles/${profile.steam_id}`} variant="link">Seller Profile</Button>
      <Button
        class="gold-button"
        href={`https://steamcommunity.com/profiles/${profile.steam_id}`}
        target="_blank"
        variant="outline"
      >
        Steam Profile
      </Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>

