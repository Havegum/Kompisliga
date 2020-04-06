<script>
import Nav from '../components/Nav.svelte';
export let segment;

$: nav = [undefined, 'premier', 'toppliste', 'lag', 'profil'].includes(segment);
</script>


<div class="layout">
	<main>
		<slot></slot>
	</main>

	{#if nav}
		<Nav {segment}/>
	{/if}
</div>


<style>
.layout {
	min-height: 100vh;
	display: grid;
	grid-template-rows: [start header-start] auto [header-end body-start] 1fr [body-end footer-start] auto [footer-end end];
}

main {
	position: relative;
	margin: 0 auto;
	box-sizing: border-box;
	grid-row: body-start / body-end;
	width: 100%;
	padding: 1rem;
}
</style>
