<script>
import GradientHeader from '@/components/GradientHeader.svelte';
import DotCarousel from '@/components/DotCarousel.svelte';
import LogoHeader from '@/components/LogoHeader.svelte';
import Spacer from '@/components/layout/Spacer.svelte';
import ArrowLeft from '@/components/ArrowLeft.svelte';
import Stack from '@/components/layout/Stack.svelte';
import Cross from '@/components/Cross.svelte';

export let max;
export let current;

export let exit = false;
export let back = false;
</script>


<div class="content">
  <div class="no-pad">
    <LogoHeader />
    <GradientHeader>
    <div slot="navigation">
        {#if back}
          <a href={back}><ArrowLeft /></a>
        {/if}
        {#if exit}
          <a href={exit}><Cross /></a>
        {/if}
      </div>
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
