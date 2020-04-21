<script>
import { goto } from '@sapper/app';
import { onMount } from 'svelte';

import ArrowLeft from '@/components/ArrowLeft.svelte';
import Overlay from '@/components/Overlay.svelte';

let scan = false;
let scanEnabled = false;
let scanTrigged = false;
let scanFlash = false;
let pendingResults = false;
let canvas, video;

let h = 0;
let w = 0;
let size = 0.95;

let hint = 'Pek kameraet mot TV-en';

$: margin = (1 - size) / 2;
$: top = (h/2) - (size / 2 *w);
$: bottom = (h/2) + (size / 2 * w);
$: left = margin * w
$: right = (1 - margin) * w;

let media = { video: { facingMode: 'environment' } };


function openScan (e) {
	scan = true;
  captureCamera(e);
}

function closeScan () {
	scan = false;
}

function captureCamera () {
	navigator.mediaDevices
		.getUserMedia(media)
		.then(handleStream)
		.catch(() => hint = 'Finner ikke kamera')
}

function handleStream (stream) {
  video.srcObject = stream;
}

async function scanImage () {
	// NOTE: not implemented
	scanFlash = true;
	pendingResults = true;
	hint = "Søker etter program ..."

	await new Promise(resolve => setTimeout(resolve, 2000));
	hint = "Fant skiskyting!"

	await new Promise(resolve => setTimeout(resolve, 1000));
	goto('spill/skiskyting');
}

onMount(() => {
	scanEnabled = 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
});

</script>


<button class="scan" class:visible={scanEnabled} on:click={openScan} aria-label="Trykk her for å scanne TV-skjermen for å velge spill automatisk!"></button>

<Overlay visible={scan}>
	<button class="scan-close-button" on:click={closeScan}>
		<ArrowLeft />
	</button>

  <div class="canvas-wrap" bind:clientHeight={h} bind:clientWidth={w} >
		<div class="flash" class:active={scanFlash}></div>
    <div class="lightbox">
      <svg class="camera-overlay" class:inactive={pendingResults}>
        <path
          class="overlay"
          fill-rule="evenodd"
          d="M0,0 {w},0 L{w},{h} L0,{h} Z
             M{left},{top} L{right},{top} L{right},{bottom} L{left},{bottom} Z"
        />
        <rect class="outline" x="{left}" y="{top}" width={w*size} height={w*size} rx="5"/>
      </svg>
      <p class="hint" style="top: calc({top}px - 2.4rem)">{hint}</p>
    </div>
    <canvas bind:this={canvas}></canvas>
    <video bind:this={video} autoplay></video>
  </div>
	<button class="round-button" on:click={scanImage}>
		<img src="/media/scan.png" alt="">
		<p>Skan</p>
	</button>
</Overlay>


<style>
.scan {
	cursor: pointer;
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	background-color: transparent;
	border: none;
	background-image: url('/media/scan.png');
	background-repeat: no-repeat;
	background-position: center;
	width: 4rem;
	height: 4rem;
}

.scan.visible {
	display: block;
}

.scan-close-button {
	cursor: pointer;
	background: transparent;
	border: none;
	position: fixed;
	top: 2rem;
	left: .75rem;
	z-index: 2;
}



video,
canvas,
.flash,
.lightbox,
.canvas-wrap,
.camera-overlay {
  width: 100%;
  height: 100%;
}

canvas,
.canvas-wrap {
  background-image: url('/media/video-placeholder.png');
  background-position: center;
  background-size: cover;
}

.canvas-wrap {
  background-color: var(--dark);
}

video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.flash,
.lightbox {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
}

.camera-overlay.inactive {
	display: none;
}

@keyframes flash {
	from {
		background-color: var(--white);
		opacity: .74;
	}
	to {
		background-color: var(--dark);
		opacity: .74;
	}
}

.flash {
	background-color: var(--white);
	opacity: 0;
}

.flash.active {
	background-color: var(--dark);
	opacity: .74;
	animation: 500ms flash ease-out;
}

.overlay {
  fill: var(--dark);
  opacity: .74;
}

.outline {
  fill: none;
  stroke: var(--white);
  stroke-width: 3px;
}

.hint {
  position: fixed;
  font-size: 1.1rem;
  text-align: center;
  text-shadow: 0 2px 4px #0009;
  width: 100%;
}

.round-button {
	cursor: pointer;

	position: fixed;
	bottom: 4em;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 1;
	border: none;

	background-color: var(--blue);

	border-radius: 100%;
	padding: 1rem;

	color: var(--white);
	font-weight: bold;
}


.round-button p,
.round-button img {
	display: block;
	margin: 0 auto;
}

.round-button img {
	height: 3rem;
	position: relative;
	bottom: .33rem;
}

.round-button p {
	position: absolute;
	bottom: .5rem;
	left: 0;
	right: 0;
	font-size: .9rem;
}

</style>
