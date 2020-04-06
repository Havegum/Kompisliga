<script>
let canvas, h, w;
let size = 0.95;

$: margin = (1 - size) / 2;
$: top = (h/2) - (size / 2 *w);
$: bottom = (h/2) + (size / 2 * w);
$: left = margin * w
$: right = (1 - margin) * w
</script>


<div bind:clientHeight={h} bind:clientWidth={w} >
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
  <canvas bind:this={canvas}></canvas>
</div>


<style>
div,
canvas {
  width: 100%;
  height: 100%;
  background-image: url('/media/video-placeholder.png');
}

div {
  background-color: var(--dark);
}

.camera-overlay {
  width: 100%;
  height: 100%;
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
