<script>
import getStylingSize from '@/helpers/getStylingSize.js';
import Box from '@/components/Box.svelte';

export let alternatives = [];
export let value;

const active = ({ text }) => text === value;
</script>

<div class="alternatives" style="grid-gap: {getStylingSize('small')}">
  {#each alternatives as alternative, i}
    <label for="choice-{i}">
      <input id="choice-{i}" type="radio" bind:group={value} value={alternative.text}>
      <Box
        padding="small"
        color={alternative.text === value ? 'white' : 'black'}
        backgroundColor={alternative.text === value ? 'blue' : 'white'}
      >
        <div class="inline" style="padding: {getStylingSize('small')} 0">
          <img src={alternative.img} alt="">
          <p>{alternative.text}</p>
        </div>
      </Box>
    </label>
  {/each}
</div>


<style>
.alternatives {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

input {
  display: none;
}

.inline {
  display: flex;
  align-items: center;
}

.inline img {
  margin-right: .33em;
}
</style>
