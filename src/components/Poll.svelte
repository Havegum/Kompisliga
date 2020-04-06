<script>
export let name;
export let img;
export let href;
</script>


<a {href}>
  <img src={img} />
  <p>{name}</p>
</a>


<style>
a {
  width: 100%;
  border-radius: var(--border-radius);
  padding: 2px;
  background: var(--gradient);
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  height: 6rem;
  object-fit: cover;
  border-radius: 3px 3px 0 0;
}

p {
  text-align: center;
  font-size: 1.2rem;
}
</style>
