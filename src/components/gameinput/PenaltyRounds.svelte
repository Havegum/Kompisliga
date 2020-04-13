<script>
import ArrowLeft from '@/components/ArrowLeft.svelte';
import ArrowRight from '@/components/ArrowRight.svelte';

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
  <button on:click={decrement}>
    <ArrowLeft />
  </button>

  <p>{value}{value === max ? '+' : ''}</p>


  <button on:click={increment}>
    <ArrowRight />
  </button>
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
  cursor: pointer;
  width: 4rem;
  height: 3rem;
  background-color: transparent;
  border: none;
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
