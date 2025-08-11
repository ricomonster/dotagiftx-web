<script lang="ts" module>
  import type { Catalog } from '$package/dotagiftx';

  interface Props {
    catalog: Catalog
    class?: string
  }
</script>

<script lang="ts">
  // Packages
  import { Hero } from '$package/hero';
  import { Treasure } from '$package/treasure';

  // Lib
  import * as Card from '$lib/components/ui/card';
  import { cn } from '$lib/utils';

  let { catalog, class: className }: Props = $props();
</script>

<div class={cn('grid gap-2 min-w-0', className)}>
  <Card.Root class="min-w-0">
    <Card.Content>
      <a href={`/search?hero=${catalog.hero}`}>
        <Hero hero={catalog.hero} inventory={true} class="gap-2" />
      </a>
    </Card.Content>
  </Card.Root>

  <Card.Root class="min-w-0">
    <Card.Content>
      <a href={`/search?origin=${catalog.origin}`}>
        <Treasure class="gap-2" treasure={catalog.origin} inventory={true} />
      </a>
    </Card.Content>
  </Card.Root>
</div>
