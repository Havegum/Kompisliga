<script>
export let segment;
export let href = '.';

import Lag from '../icons/Lag.svelte';
import Premier from '../icons/Premier.svelte';
import Profil from '../icons/Profil.svelte';
import Spill from '../icons/Spill.svelte';
import Toppliste from '../icons/Toppliste.svelte';

const icons = {
  ".": Spill,
  premier: Premier,
  profil: Profil,
  lag: Lag,
  toppliste: Toppliste
}
</script>

<a aria-selected='{segment === href || segment === undefined && href === '.'}' {href}>
  <svelte:component this={icons[href]} />
  <slot></slot>
</a>


<style>
a {
	text-decoration: none;
	display: block;
  text-align: center;
  color: var(--white);
  user-select: none;
}

a[aria-selected="true"] {
  color: var(--blue);
}

a :global(svg) {
  transform: scale(0.8);
  margin-bottom: -.5rem;
}

a :global(svg .st0) {
  fill: none;
}

a :global(svg) {
  fill: var(--white);
}

a[aria-selected="true"] :global(svg) {
  fill: var(--blue);
}

</style>
