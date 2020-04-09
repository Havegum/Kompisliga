<script>
import { goto, stores } from '@sapper/app';

import GradientButton from '@/components/GradientButton.svelte';
import GradientHeader from '@/components/GradientHeader.svelte';
import DotCarousel from '@/components/DotCarousel.svelte';
import LogoHeader from '@/components/LogoHeader.svelte';
import Box from '@/components/Box.svelte';

import Spacer from '@/components/layout/Spacer.svelte';
import Stack from '@/components/layout/Stack.svelte';

import { quizDone } from '@/helpers/state.js';
import database from '@/helpers/database.js';

const { page } = stores();
$: gameid = $page.params.gameid;
$: game = database.get(gameid);

function endQuiz () {
  quizDone.set(true);
  goto(`spill/${gameid}/1`);
}
</script>


<div class="content">
  <div class="no-pad">
    <LogoHeader />
    <GradientHeader>
      <p>{game.type}</p>
      <Spacer />
      <h1>{game.title}</h1>
      <p>{game.subtitle}</p>
      <Spacer />
      <p>{game.closeDatestring}</p>
      <div class="channel">
        <img src="media/television.png" alt="">
        {game.channel}
      </div>
    </GradientHeader>
  </div>

  <div class="body">
    <Spacer />
    <Stack>
      <Box backgroundColor="blue" color="white">
        <div class="lock-notification">
          <span>Stenger om {game.closesIn}</span>
          <img src="media/unlocked.png" alt="">
        </div>
      </Box>

      <Box>
        <Spacer />
        {@html game.intro}
        <Spacer />
      </Box>

      <GradientButton arrow={true} on:click={endQuiz}>Spill</GradientButton>
    </Stack>
    <Spacer />
  </div>
  <DotCarousel max={4} current={0} />
</div>


<style>
.content {
  display: grid;
  height: 100%;
  grid-template-rows: [start header-start] auto [header-end body-start] 1fr [body-end footer-start] auto [footer-end end];
}

.body {
  align-self: center;
}

.no-pad {
  margin: -1rem;
  grid-row: header-start / header-end;
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

.lock-notification {
  display: flex;
  justify-content: space-between;
}

.lock-notification img {
  height: 1.2rem;
}
</style>
