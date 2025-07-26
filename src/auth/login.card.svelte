<script lang="ts">
  import { Check, TriangleAlert } from '@lucide/svelte';

  // Modules
  import { SteamIcon } from '$package/shared';

  // Lib
  import { Button } from '$lib/components/ui/button';
  import * as Alert from '$lib/components/ui/alert';
  import * as Card from '$lib/components/ui/card';
</script>

<div class="space-y-6">
  <Card.Root class="p-6">
    <Card.Content class="grid p-0 md:grid-cols-2">
      <div class="p-4">
        <h2 class="font-medium text-xl mb-2">Signing in to DotagiftX allows you to access additional features.</h2>
        <ul>
          <li class="flex flex-row py-1"><Check class="text-green-500 mr-1" /> Post items</li>
          <li class="flex flex-row py-1"><Check class="text-green-500 mr-1" /> Track reservations</li>
          <li class="flex flex-row py-1"><Check class="text-green-500 mr-1" /> Record sales history</li>
          <li class="flex flex-row py-1"><Check class="text-green-500 mr-1" /> Place buy order</li>
        </ul>
      </div>
      <div class="p-4">
        <p class="mb-4">This website is not affiliated with Valve Corporation or Steam.</p>

        <Button variant="outline" size="lg" class="mb-6" href="/auth/steam">
          <SteamIcon /> Sign in through Steam
        </Button>

        <p class="text-muted-foreground text-sm">
          By signing in, We ask for public information about your account from the
          <a href="https://developer.valvesoftware.com/wiki/Steam_Web_API" target="_blank" class="text-blue-600">Steam Web API</a>
          this includes (steam id, profile name, and avatar image) and use cookies to keep your signed in session active.
        </p>
      </div>
    </Card.Content>
  </Card.Root>

  <Alert.Root>
    <TriangleAlert />
    <Alert.Title>How do I know this is real?</Alert.Title>
    <Alert.Description>
      <p>
        When you click the sign in button, you will be redirected to
        <a href="https://steamcommunity.com" target="_blank" class="text-blue-600">https://steamcommunity.com</a>
        and if you are already signed into the Steam community, that page will allow you simply
        click <span class="font-bold">"Sign In"</span> without entering your password.
      </p>
    </Alert.Description>
  </Alert.Root>
</div>
