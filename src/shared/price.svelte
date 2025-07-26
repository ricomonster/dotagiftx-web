<script lang="ts" module>
  interface Props {
    value: number
    currency?: string
    class?: string
  }
</script>

<script lang="ts">
  let { value, currency = '$', class: className }: Props = $props();

  const formattedPrice = value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
</script>

<span class={className}>{currency}{formattedPrice}</span>
