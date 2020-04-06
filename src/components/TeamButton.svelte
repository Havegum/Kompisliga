<script>
export let name;
export let href;

</script>

<a {href}>{name}</a>


<style>
a {
  color: var(--white);
  font-size: 1.4rem;
  text-align: center;
  display: block;
  background: linear-gradient(#0000, #0008);
  background-blend-mode: multiply;
  background-color: var(--blue);
  text-decoration: none;
  border-radius: var(--border-radius);
  padding: .75em 0;
}
</style>
