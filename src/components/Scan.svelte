<script>
import { onMount } from 'svelte';

import ArrowLeft from '@/components/ArrowLeft.svelte';
import Overlay from '@/components/Overlay.svelte';
import Scan from '@/components/Scan.svelte';

let scan = false;
let scanEnabled = false;
let scanTrigged = false;

let canvas, video;

let h = 0;
let w = 0;
let size = 0.95;

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

async function captureCamera () {
  const stream = await navigator.mediaDevices.getUserMedia(media);
  handleStream(stream);
}

function handleStream (stream) {
  video.srcObject = stream;
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
    <div class="lightbox">
      <svg class="camera-overlay">
        <path
          class="overlay"
          fill-rule="evenodd"
          d="M0,0 {w},0 L{w},{h} L0,{h} Z
             M{left},{top} L{right},{top} L{right},{bottom} L{left},{bottom} Z"
        />
        <rect class="outline" x="{left}" y="{top}" width={w*size} height={w*size} rx="5"/>
      </svg>
      <p class="hint" style="top: calc({top}px - 2.4rem)">Pek kameraet mot TV-en</p>
    </div>
    <canvas bind:this={canvas}></canvas>
    <video bind:this={video} autoplay></video>
  </div>

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

.lightbox {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
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
</style>
