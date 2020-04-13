<script>
let w = 0;
let h = 0;
</script>


<div class="header" bind:clientWidth={w} bind:clientHeight={h}>
  <svg>
    <defs>
      <linearGradient id="header-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0%" stop-color="var(--red)" />
        <stop offset="100%" stop-color="var(--blue)" />
      </linearGradient>
    </defs>
    <path fill="url(#header-gradient)" d="M 0 0 L 0 {0.8*h} C {0.2*w} {h}, {0.8*w} {h}, {w} {0.8*h} L {w} 0"/>
  </svg>
  <div class="navigation">
    <slot name="navigation"></slot>
  </div>
  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
.header {
  position: relative;
  width: 100%;
  min-height: 16rem;
  display: flex;
  flex-direction: column;
}

.content {
  position: relative;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  padding: 0 1rem 3rem;
}

.navigation {
  z-index: 1;
}

svg {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
