<script>
import getStylingSize from '../../helpers/getStylingSize.js';
export let gap = 'small';
</script>

<div style="grid-gap: {getStylingSize(gap)}">
  <slot></slot>
</div>

<style>
div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
