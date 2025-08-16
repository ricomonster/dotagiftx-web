<script lang="ts">
  import '../app.css';
  import '../custom.css';

  import { onMount } from 'svelte';

  // Packages
  import { Footer, SiteHeader } from '$package/shared';
  import { getTopKeywords, keywords } from '$package/stats';

  let { children } = $props();

  onMount(async () => {
    const result = await getTopKeywords();
    if (result.length > 0) {
      keywords.set(result);
    }
  });
</script>

<div class="min-h-screen flex flex-col">
  <SiteHeader />

  <main class="flex-grow py-8">
    {@render children()}
  </main>

  <Footer />
</div>
