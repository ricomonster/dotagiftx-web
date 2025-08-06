<script lang="ts" module>
  // Interfaces
  import type { PageData } from '$routes/profiles/[profileId]/$types';
  import type { User } from '$package/dotagiftx';

  interface Props {
    data: PageData
  }
</script>

<script lang="ts">
  import ProfileCard from './card.svelte';
  import ProfileTabs from './tabs.svelte';

  let { data }: Props = $props();
  let profile = data.profile as User;
</script>

<svelte:head>
  <title>DotagiftX :: {profile.name}</title>
</svelte:head>

<section class="profile-page container mx-auto p-4">
  <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    <div class="col-span-1">
      <ProfileCard {profile} />
    </div>

    <div class="col-span-1 2xl:col-span-2 w-full min-w-0">
      <ProfileTabs {profile} />
    </div>
  </div>
</section>
