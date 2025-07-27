<script lang="ts" module>
  import { formatDistanceToNow } from 'date-fns';

  interface Props {
    value: string;
    class?: string;
  }
</script>
<script lang="ts">
  let { value, class: className }: Props = $props();

  let timeAgo = $derived(formatDistanceToNow(new Date(value), { addSuffix: true }));
</script>

<time class={className} datetime={value}>{timeAgo}</time>
