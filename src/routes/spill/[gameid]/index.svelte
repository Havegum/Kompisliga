<script context="module">
export function preload ({ params }) {
  return params;
}
</script>

<script>
import { goto, stores } from '@sapper/app';

import GradientButton from '@/components/GradientButton.svelte';
import Spacer from '@/components/layout/Spacer.svelte';
import Stack from '@/components/layout/Stack.svelte';
import Game from '@/components/Game.svelte';
import Box from '@/components/Box.svelte';

import database from '@/helpers/database.js';

export let gameid;
let game = database.get(gameid);
let max = game.parts.length + 2;
</script>


<Game {max} current={0} exit=".">
  <div slot="header">
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
  </div>

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

  <GradientButton
    arrow={true}
    on:click={() => goto(`spill/${gameid}/1`)}
  >
    Spill
  </GradientButton>
</Game>


<style>
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
