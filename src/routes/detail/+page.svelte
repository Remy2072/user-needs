
<script>
    	import { blur } from 'svelte/transition';
</script>

<main transition:blur>
    <a href="/">We ❤️ Web</a>
</main>

<style>
    body {
        overflow-y: scroll;
    }

  main {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  a {
    position: relative;
    z-index: 1;
    border: 1px solid var(--blue);
    padding: 10px 5rem;
    background-color: var(--green);
    border-radius: 10px;
    color: var(--blue);
    font-weight: 700;
    text-decoration: none;
    transition:
      top 0.2s,
      right 0.2s;
  }

  a:hover {
    top: 1px;
    right: 1px;
  }

  a::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid var(--blue);
    background-color: var(--green);
    border-radius: 10px;
    right: 2px;
    top: 2px;
    transition:
      top 0.2s,
      right 0.2s;
  }

  a:hover::after {
    top: 1px;
    right: 1px;
  }
</style>
