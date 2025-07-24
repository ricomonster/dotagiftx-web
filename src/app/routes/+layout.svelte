<script lang="ts">
  import '../app.css';

  // Modules
  import { SiteHeader } from '$src/shared';

  // Asset
  import favico from '$static/favicon.ico';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favico} />
</svelte:head>

<SiteHeader />
{@render children()}
