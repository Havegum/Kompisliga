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

function endQuiz () {
  goto(`/`);
}
</script>

<Game {max} current={max}>
  <div slot="header">
    <h1>Svar registrert!</h1>
    <p>{game.subtitle}</p>

    <Spacer />

    <p><b>Følg med på resultatene på TV</b></p>
    <p>{game.closeDatestring}</p>
    <div class="channel">
      <img src="media/television.png" alt="">
      {game.channel}
    </div>
  </div>

  <Stack margin="small">
    <h2>Deltakende lag i {game.title}</h2>
    <div class="grid">
      {#each game.teams as team}
        <Box padding="small">
          <div class="inline">
            <img src="media/teams/{team.id}.png" alt="" />
            <p>{team.name}</p>
          </div>
        </Box>
      {/each}
    </div>
  </Stack>

  <Stack margin="small">
    <h2>Tips</h2>
    <Box>
      Minn dine venner på å spille!
      Dersom alle på laget deltar i spillet får dere bonus!
    </Box>
  </Stack>

  <GradientButton arrow={true} on:click={endQuiz}>ferdig</GradientButton>
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

.inline {
  display: flex;
  align-items: center;
}

.inline p {
  margin-left: .2rem;
  font-size: 1rem;
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
}
</style>
