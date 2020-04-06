<script>
import NavButton from './NavButton.svelte';

export let segment;
</script>


<nav>
	<ul>
		<li>
			<NavButton {segment} href='.'>Spill</NavButton>
		</li>
		<li>
			<NavButton {segment} href='toppliste'>Toppliste</NavButton>
		</li>
		<li>
			<NavButton {segment} href='lag'>Lag</NavButton>
		</li>
		<li>
			<NavButton {segment} href='premier'>Premier</NavButton>
		</li>
		<li>
			<NavButton {segment} href='profil'>Profil</NavButton>
		</li>
	</ul>
</nav>


<style>
nav {
	grid-row: footer-start / footer-end;
	font-weight: 300;
	background-color: var(--black);
	padding: 1em;
}

ul {
	display: flex;
	justify-content: space-around;

	margin: 0;
	padding: 0;
	list-style: none;
}

li {
	flex-basis: 0 1 0;
}
</style>
