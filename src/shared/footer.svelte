<script lang="ts" module></script>
<script lang="ts">
  import { Award } from '@lucide/svelte';

  // Lib
  import { Separator } from '$lib/components/ui/separator';
</script>
<div class="flex flex-col ">
  <!-- <div class="grow bg-muted" /> -->
  <footer>
    <div class="container mx-auto">
      <div class="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
        <div>
          <h2>
            <a href="/about" class="flex flex-row items-center gap-1">
              <img src="/brand_1x.png" alt="Dotagiftx" class="w-28" />
              by kudarap
            </a>
          </h2>
          <ul class="mt-6 flex items-center gap-4 flex-wrap">
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/middleman">Middleman</a></li>
            <li><a href="/moderators">Moderators</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>

        <div class="max-w-xs w-full">
          <h6 class="font-semibold text-gold">
            <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2313234224" target="_blank" class="flex items-center justify-end">
              <Award /> Give a Steam Award
            </a>
          </h6>
        </div>
      </div>

      <Separator />

      <div class="py-8 px-6 xl:px-0">
        <p class="text-muted-foreground text-sm">DotagiftX is a community website and not affiliated with Valve or Steam.</p>
        <p class="text-muted-foreground text-sm">Game content and materials are trademarks and copyrights of their respective publisher and its licensors. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
