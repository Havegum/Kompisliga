<script>
export let arrow = false;
</script>

<button on:click>
  <slot></slot>
  {#if arrow}
    <img class="arrow-left" src="media/arrow-right.png" alt="">
  {/if}
</button>

<style>
button {
  cursor: pointer;
  border: none;
  background: var(--gradient);
  padding: 1rem;
  border-radius: var(--border-radius);
  color: var(--white);
  text-align: left;
  text-transform: uppercase;
  font-size: 1rem;

  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.arrow-left {
  height: 1.2rem;
}
</style>
