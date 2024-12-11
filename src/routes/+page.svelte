<script>
    import { Navigation, Heading, Grid, About, Footer, Credits} from "$lib";

    export let data;
</script>

<Navigation />

<div class="container">
    <Heading />
    <Grid {data} />
    <About />
    <Credits />
</div>

<Footer />

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
