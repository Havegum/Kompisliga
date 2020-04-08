<script>
import getStylingSize from '../helpers/getStylingSize.js';

export let backgroundColor = 'white';
export let color = 'black';
export let padding = 'm';

$: style = `
  background-color: var(--${backgroundColor});
  color: var(--${color});
  padding: ${getStylingSize(padding)}
`;
</script>


<div {style} >
  <slot></slot>
</div>


<style>
div {
  width: 100%;
  background-color: var(--white);
  border-radius: var(--border-radius);
  color: var(--black);
  padding: .5rem;
}
</style>
