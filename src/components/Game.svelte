<script>
import GradientHeader from '@/components/GradientHeader.svelte';
import DotCarousel from '@/components/DotCarousel.svelte';
import LogoHeader from '@/components/LogoHeader.svelte';
import Spacer from '@/components/layout/Spacer.svelte';
import Stack from '@/components/layout/Stack.svelte';

export let max;
export let current;
</script>


<div class="content">
  <div class="no-pad">
    <LogoHeader />
    <GradientHeader>
      <slot name="header"></slot>
    </GradientHeader>
  </div>

  <div class="body">
    <Spacer />
    <Stack>
      <slot></slot>
    </Stack>
    <Spacer />
  </div>

  <DotCarousel {max} {current} />
</div>


<style>
.content {
  display: grid;
  height: 100%;
  grid-template-rows: [start header-start] auto [header-end body-start] 1fr [body-end footer-start] auto [footer-end end];
}

.no-pad {
  margin: -1rem;
  grid-row: header-start / header-end;
}

.body {
  align-self: center;
}
</style>
