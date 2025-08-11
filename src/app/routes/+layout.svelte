<script lang="ts">
  import '../app.css';
  import '../custom.css';

  import { onMount } from 'svelte';

  // Packages
  import { SiteHeader } from '$package/shared';
  import { getTopKeywords, keywords } from '$package/stats';

  let { children } = $props();

  onMount(async () => {
    const result = await getTopKeywords();
    if (result.length > 0) {
      keywords.set(result);
    }
  });
</script>

<SiteHeader />
{@render children()}
