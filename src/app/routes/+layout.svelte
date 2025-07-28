<script lang="ts">
  import '../app.css';
  import '../../../node_modules/lineicons/assets/icon-fonts/lineicons.css';

  import { ModeWatcher } from 'mode-watcher';

  // Modules
  import { SiteHeader } from '$package/shared';

  let { children } = $props();
</script>

<ModeWatcher />
<SiteHeader />
{@render children()}
