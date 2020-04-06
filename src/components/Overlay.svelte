<script>
export let visible = true;
</script>

<div class:visible aria-hidden={visible}><slot></slot></div>

<style>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  visibility: hidden;
}

.visible {
  visibility: visible;
}
</style>
