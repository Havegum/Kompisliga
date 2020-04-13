<script context="module">
export function preload ({ params }) {
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
let game = database.get(gameid, current - 1);
let max = database.get(gameid).parts.length + 2;

let value = 0;

function step () {
  if (current >= max - 2) {
    quizDone.set(true);
    goto(`spill/${gameid}/ferdig`);
  } else {
    game = database.get(gameid, current);
    goto(`spill/${gameid}/${current + 1}`);
  }
}
</script>


<Game {max} current={current} >
  <div slot="header">
    <p>{game.title}</p>
    <p>{game.question}</p>
  </div>

  <svelte:component this={inputTypes[game.inputType]} bind:value {...game.gameProperties}/>

  <GradientButton arrow={true} on:click={step}>Spill</GradientButton>
</Game>


<style>
</style>
