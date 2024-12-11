<script>
    import { Navigation, Heading, Grid, About, Footer} from "$lib";

    export let data;
</script>

<Navigation />

<div class="container">
    <Heading />
    <Grid {data} />
    <About />

    <p>
        Copyright © 2024 <a href="https://fdnd.nl/">FDND</a> - <a href="#">Jaymar Westerlow</a> & <a href="https://remyduivesteijn.netlify.app/">Remy Duivenstijn</a>
    </p>
</div>

<Footer />

<style>
    .container {
        width: 100%;
        background: var(--grey);
        border-radius: 1.563rem;
        padding: 3.125rem 2.188rem;
    }

    .container > p {
        margin-top: 2rem;
        color: var(--fifthyshadesofgrey);
        font-size: 1rem;
        text-align: center;
    }
    
    .container > p a {
        color: var(--purple);
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
            padding: 1rem 9.375rem 2rem;
        }
    }
</style>
