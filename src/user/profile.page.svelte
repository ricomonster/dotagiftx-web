<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/profiles/[profileId]/$types';
  import type { User } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  import Profile from './profile.svelte';

  let { data }: Props = $props();
  let profile = data.profile as User;
</script>

<svelte:head>
  <title>DotagiftX :: {profile.name}</title>
</svelte:head>

<section class="profile-page container mx-auto p-4">
  <Profile {profile} view="page" />
</section>
