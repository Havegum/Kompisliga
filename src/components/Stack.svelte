<script>
import getStylingSize from '../helpers/getStylingSize.js';

export let margin = 'm';

$: gap = getStylingSize(margin);
</script>


<section style="grid-gap: {gap};">
  <slot></slot>
</section>

<style>
section {
  display: grid;
  position: relative;
}
</style>
