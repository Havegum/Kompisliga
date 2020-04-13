<script>
export let max = 4;
export let current = 0;

$: dots = Array(max).fill().map((_, i) => i);
</script>

<div class="dots">
  {#each dots as dot, i}
    <div class="dot" class:active={dot === current}></div>
  {/each}
</div>


<style>
.dots {
  width: 100%;
  display: flex;
  justify-content: center;
}

.dot {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background-color: var(--white);
  opacity: 0.25;
}

.dot + .dot {
  margin-left: 1rem;
}

.active {
  opacity: 1;
}
</style>
