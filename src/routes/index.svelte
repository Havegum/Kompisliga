<script>
import Stack from '../components/Stack.svelte';
import Spacer from '../components/Spacer.svelte';
import GameButton from '../components/GameButton.svelte';
</script>

<svelte:head>
	<title>Kompisliga</title>
</svelte:head>

<Stack>
	<a class="scan" href="scan" aria-label="Trykk her for å scanne TV-skjermen for å velge spill automatisk!"></a>
	<Spacer/>
	<figure class="title">
		<img class="logo" alt="NRK" src="media/NRK-logo.svg"/>
		<h1>Kompisliga</h1>
	</figure>

	<h1 class="play-now">Spill nå og tjen poeng</h1>

	<Stack margin="small">
		<h2>Gjett utfallet</h2>
		<GameButton name="Skiskyting" round="Jaktstart menn 12,5 km" channel="nrk1" img="media/skiskyting.jpg" href="."/>
		<GameButton name="Sjakk" round="Finale lynsjakk" channel="nrk2" img="media/sjakk.jpg" href="."/>
	</Stack>
</Stack>

<style>
.title {
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 2.3rem;
	text-transform: uppercase;
	margin: 0;
}

.logo {
	display: block;
	height: 1.1em;
}

h1 {
	font-size: 1em;
	text-align: center;
}

.play-now {
	font-size: 1rem;
	color: var(--blue);
	font-family: var(--sans);
	font-weight: normal;
	text-transform: uppercase;
	text-align: left;
}

.scan {
	display: block;
	position: absolute;
	top: 0;
	right: 0;

	background-image: url('/media/scan.png');
	background-repeat: no-repeat;
	width: 4rem;
	height: 4rem;
}
</style>
