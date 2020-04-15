<script>
export let name;
export let channel;
export let href;
export let round;
export let img = null;
export let disabled = false;
</script>


<a href={disabled ? '' : href} class:disabled>
  <div class="channel">
    <img src="media/channel-{channel}.png" alt="Kanal: {channel}"/>
  </div>
  <div class="content">
    <h3>{name}</h3>
    <p>{round}</p>

    {#if img}
      <img class="background-image" src={img} alt="" role="presentation"/>
    {/if}

    <div class="background-gradient"></div>
    <div class="arrow"></div>
  </div>
</a>



<style>
/* layout */
a {
  display: grid;
  grid-template-columns: [channel] auto [content] 1fr;
  height: 6rem;
  background-color: lightblue;
  overflow: hidden;
  border-radius: var(--border-radius);
  text-decoration: none;
}

.disabled {
  opacity: 0.2;
}

.channel {
  grid-column-start: channel;
  background-color: var(--white);
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  grid-column-start: content;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  overflow: hidden;
  text-shadow: 0 2px 4px #0009;
}


/* text */
h3 {
  font-size: 1.5rem;
  font-family: var(--sans);
}

p {
  font-size: .95rem;
  text-transform: uppercase;
}


/* arrow */
.arrow {
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 100%;
  background-image: url('/media/arrow-right.png');
  background-repeat: no-repeat;
  background-position: center;
}


/* background */
.background-gradient,
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-gradient {
  background: linear-gradient(20deg, #D32F48, var(--blue));
  opacity: .93;
}

.background-image {
  object-fit: cover;
  transition: transform 200ms ease-out;
}

a:not(.disabled):hover .background-image,
a:not(.disabled):focus .background-image,
a:not(.disabled):active .background-image {
  transform: scale(1.15);
}
</style>
