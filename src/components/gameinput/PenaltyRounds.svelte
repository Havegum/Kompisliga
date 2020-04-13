<script>
import ArrowLeft from '@/components/ArrowLeft.svelte';

export let min = 0;
export let max = 6;
export let value = 0;

function decrement () {
  if (value > min) value--;
}

function increment () {
  if (value < max) value++;
}
</script>

<div class="controls">
  <button on:click={decrement}>&lt;</button>
  <p>{value}{value === max ? '+' : ''}</p>
  <button on:click={increment}>&gt;</button>
</div>

<figure>

  <img class="penalty-figure" src="media/game-graphics/penalty-figure.png">
  <img class="penalty-round" src="media/game-graphics/penalty-round.png">
</figure>


<style>
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.controls p {
  font-size: 1.2rem;
}

button {
  width: 4rem;
  height: 3rem;
}

figure {
  position: relative;
}

.penalty-figure {
  width: 2.5rem;
  height: 2.5rem;

  position: absolute;
  left: 50%;

  transform: translate(-50%, -25%);
}

.penalty-round {
  margin: 0 auto;
  display: block;
}
</style>
