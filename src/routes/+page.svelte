<script>
    import { Navigation, Heading, Grid, About, Footer, Credits } from "$lib";
    import { fly } from "svelte/transition";

    export let data;
</script>

<div in:fly={{ y: 200, duration: 500 }} out:fly={{ y: -200, duration: 500 }}>
    <Navigation />

    <div class="container">
        <Heading />
        <Grid {data} />
        <About />
        <Credits />
    </div>

    <Footer />
</div>

<style>
    .container {
        width: 100%;
        background: var(--container-gradient);
        border-radius: 1.563rem;
        padding: 3.125rem 2.188rem;
    }

    @media screen and (min-width: 768px) {
        .container {
            border-radius: 1.875rem;
            padding: 1rem 3.125rem 1rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .container {
            border-radius: 2.5rem;
            padding: 1rem 6.25rem 2rem;
        }
    }

    @media screen and (min-width: 1440px) {
        .container {
            padding: 1rem 10rem 2rem;
        }
    }
</style>
