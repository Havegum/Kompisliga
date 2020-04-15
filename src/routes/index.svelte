<script>
import { onMount } from 'svelte';

import Spacer from '@/components/layout/Spacer.svelte';
import Stack from '@/components/layout/Stack.svelte';
import Grid from '@/components/layout/Grid.svelte';

import GameButton from '@/components/GameButton.svelte';
import TeamButton from '@/components/TeamButton.svelte';
import Scan from '@/components/Scan.svelte';
import Poll from '@/components/Poll.svelte';

import { quizDone } from '@/helpers/state.js';
</script>


<svelte:head>
	<title>Kompisliga</title>
</svelte:head>

<Stack>
	<Scan />
	<Spacer/>
	<figure class="title">
		<img class="logo" alt="NRK" src="media/NRK-logo.svg"/>
		<h1>Kompisliga</h1>
	</figure>


	<h1 class="play-now">Spill nå og tjen poeng</h1>


	<Stack margin="small">
		<h2>Gjett utfallet</h2>
		<GameButton
			name="Skiskyting"
			round="Jaktstart menn 12,5 km"
			channel="nrk1"
			img="media/skiskyting.jpg"
			href="spill/skiskyting"
			disabled={$quizDone}
		/>
		<GameButton
			name="Sjakk"
			round="Finale lynsjakk"
			channel="nrk2"
			img="media/sjakk.jpg"
			href="spill/skiskyting"
		/>
	</Stack>


	<Stack margin="small">
		<h2>Meningsmålinger</h2>
		<Grid>
			<Poll name="Nytt på Nytt" img="media/nytt-paa-nytt.jpg" href="."/>
			<Poll name="Debatten" img="media/debatten.jpg" href="."/>
		</Grid>
	</Stack>


	<Stack margin="small">
		<h2>Mine lag</h2>
		<Grid>
			<TeamButton name="MixMaster" href="."/>
			<TeamButton name="FabFive" href="."/>
		</Grid>
	</Stack>
	<Spacer />
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
</style>
