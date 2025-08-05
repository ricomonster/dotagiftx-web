<script lang="ts" module>
  interface Props {
    class?: string;
  }
</script>

<script lang="ts">
  let { class?: className }: Props = $props()
</script>
