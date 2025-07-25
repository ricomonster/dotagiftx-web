<script lang="ts">
  import '../app.css';
  import '../../../node_modules/lineicons/assets/icon-fonts/lineicons.css';

  // Modules
  import { SiteHeader } from '$src/shared';

  let { children } = $props();
</script>

<SiteHeader />
{@render children()}
