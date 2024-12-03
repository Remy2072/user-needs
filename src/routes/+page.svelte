<script>
    import { Footer, Navigation, Heading, Grid } from "$lib";

    export let data;
</script>

<Navigation />

<div class="container">
    <Heading />
    <Grid {data} />
</div>

<Footer />

<style>
    .container {
        width: 100%;
        background: transparent;
        border: 2px solid black;
        border-radius: 24px;
        padding: 50px 2.188rem;
    }

    @media screen and (min-width: 768px) {
        .container {
            border-radius: 30px;
            padding: 1rem 3.125rem 2rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .container {
            border-radius: 2.5rem 0 2.5rem 2.5rem;
            padding: 1rem 6.25rem 4rem;
        }
    }

    @media screen and (min-width: 1440px) {
        .container {
            padding: 1rem 9.375rem 4rem;
        }
    }
</style>
