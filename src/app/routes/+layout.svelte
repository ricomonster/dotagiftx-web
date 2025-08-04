<script lang="ts">
  import '../app.css';

  // Modules
  import { SiteHeader } from '$package/shared';

  let { children } = $props();
</script>

<SiteHeader />
{@render children()}
