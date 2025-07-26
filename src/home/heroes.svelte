<script lang="ts" module>
  interface Props {
    heroes: string[];
  }
</script>

<script lang="ts">
  let { heroes }: Props = $props();
</script>

<div class="grid grid-cols-5">
  {#each heroes as hero, i (i)}
    <a href="/">{hero}</a>
  {/each}
</div>
