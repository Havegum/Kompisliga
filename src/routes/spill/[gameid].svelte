<script context="module">
const preload = ({ params }) => params;
export { preload };
</script>


<script>
import GradientButton from '../../components/GradientButton.svelte';
import GradientHeader from '../../components/GradientHeader.svelte';
import LogoHeader from '../../components/LogoHeader.svelte';
import Box from '../../components/Box.svelte';

import Spacer from '../../components/layout/Spacer.svelte';
import Stack from '../../components/layout/Stack.svelte';

export let gameid;

</script>


<div class="no-pad">
  <LogoHeader />
  <GradientHeader>
    <p>Gjett utfallet</p>
    <Spacer />
    <h1>Skiskyting</h1>
    <p>Jaktstart menn V-cup 12,5 km</p>
    <Spacer />
    <p>Lørdag 14. mars kl 13.45</p>
    <div class="channel">
      <img src="media/television.png" alt="">
      NRK 1
    </div>


  </GradientHeader>
</div>

<Spacer />

<div>
  <Stack>
    <Box backgroundColor="blue" color="white" padding="small">
      Stenger om 1 t 22 m
    </Box>

    <Box>
      For hver riktige gjetning får du <b>10 poeng</b> til deg og dine deltakende lag. Resultatene vises når sendingen er ferdig.
    </Box>

    <GradientButton>
      Neste
    </GradientButton>
  </Stack>
</div>


<style>
.no-pad {
  margin: -1rem;
}

.channel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.channel img {
  height: 1rem;
  margin-right: .3rem;
  transform: translateY(-2px);
}
</style>
