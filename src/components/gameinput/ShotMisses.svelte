<script>
import Box from '@/components/Box.svelte';
import Spacer from '@/components/layout/Spacer.svelte';

export let value;
export let min = 0;
export let max = 5;

$: miss = Array(max).fill();
</script>

<Box>
  <Spacer size="small" />
  <div class="targets">

    {#if min === 0}
      <label for="target-0" class="target" class:active={value === 0}>
        <input id="target-0" type="radio" bind:group={value} value={0}>
        <p class="none">(ingen)</p>
        <p class:active={value === 0}>{0}</p>
      </label>
    {/if}

    {#each miss as m, i}
      <label for="target-{i + 1}" class="target">
        <input id="target-{i + 1}" type="radio" bind:group={value} value={i + 1}>
        <img src="media/game-graphics/{i < value ? 'hit' : 'miss'}.png" alt="">
        <hr>
        <div class="vr"></div>
        <p class:active={value === i + 1}>{i + 1}</p>
      </label>
    {/each}
  </div>
  <Spacer size="small" />
</Box>


<style>
.targets {
  display: flex;
  justify-content: space-between;
}

.target {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
}

.target input {
  display: none;
}

.target img {
  display: block;
  height: 2.33rem;
  width: 2.33rem;
}

hr {
  border: none;
  border-top: 1px solid var(--black);
  width: 100%;
  margin-top: .5rem;
}

.vr {
  width: 1px;
  height: .5rem;
  background-color: var(--black);
  position: relative;
  top: -0.25rem;
}

.none {
  font-size: .8rem;
  opacity: 0.75;
  padding-top: .5rem;
  padding-bottom: calc(1.7rem + 0px);
}

.active {
  font-weight: bold;
}
</style>
