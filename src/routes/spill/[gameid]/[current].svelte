<script context="module">
export function preload ({ params }) {
  if (params.current < 1) {
    this.redirect(301, `spill/${params.gameid}`);
  }
  return params;
}
</script>

<script>
import { goto, stores } from '@sapper/app';

import ShotsMissed from '@/components/gameinput/ShotMisses.svelte';
import PenaltyRounds from '@/components/gameinput/PenaltyRounds.svelte';
import MultipleChoice from '@/components/gameinput/MultipleChoice.svelte';

const inputTypes = {
  ShotsMissed,
  PenaltyRounds,
  MultipleChoice
};

import GradientButton from '@/components/GradientButton.svelte';
import Spacer from '@/components/layout/Spacer.svelte';
import Stack from '@/components/layout/Stack.svelte';
import Game from '@/components/Game.svelte';
import Box from '@/components/Box.svelte';

import { quizDone } from '@/helpers/state.js';
import database from '@/helpers/database.js';

export let gameid;
export let current;

$: current = +current;
$: final = current >= max - 2;
$: game = database.get(gameid, current - 1);
let max = database.get(gameid).parts.length + 2;

let value = 0;

function step () {
  if (final) {
    quizDone.set(true);
    goto(`spill/${gameid}/ferdig`);
  } else {
    game = database.get(gameid, current);
    goto(`spill/${gameid}/${current + 1}`);
  }
}
</script>


<Game {max} current={current} back="spill/{gameid}/{current - 1}">
  <div slot="header">
    <p>{game.title}</p>
    <p>{game.question}</p>
  </div>

  <svelte:component this={inputTypes[game.inputType]} bind:value {...game.gameProperties}/>

  <GradientButton arrow={true} on:click={step}>{final ? 'Lever svar' : 'Neste'}</GradientButton>
</Game>


<style>
</style>
