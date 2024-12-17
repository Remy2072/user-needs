<script>
    import { Anchor } from "$lib";
</script>

<header>
    <article>
        <h1>Sprint 1 | Sprint 13</h1>
        <small>Vrijdag 13 December 2024 · 13:00 - 14:00 uur</small>
    </article>

    <a href="/">Terug</a>
</header>

<img src="/img/kv.png" alt="" />
<article>
    <h2>Kilian Valkhof</h2>
    <h3>Developer</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit
        posuere tellus ac sodales. Fusce hendrerit elit dictum, mattis ipsum
        facilisis, facilisis felis. Duis facilisis arcu pharetra Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.<br /><br />Nunc suscipit
        posuere tellus ac sodales. Fusce hendrerit elit dictum, mattis ipsum
        facilisis, facilisis felis. Duis facilisis arcu.
    </p>
</article>

<style>
    header {
        color: var(--blue);
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            margin-top: 1.5rem;
        }
        
        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    header article h1 {
        font-size: 1.8rem;
        margin-bottom: .5rem;

        @media (min-width: 1024px) {
            font-size: 2.6rem;
        }
    }

    header article small {
        font-size: 1rem;

        @media (min-width: 1024px) {
            font-size: 1.2rem;
        }
    }

    header a {
        position: relative;
        z-index: 1;
        border: 1px solid var(--blue);
        padding: 10px 5rem;
        margin-top: 1.875rem;
        background-color: var(--green);
        border-radius: 10px;
        color: var(--blue);
        font-weight: 700;
        text-decoration: none;
        width: fit-content;
        transition:
            top 0.2s,
            right 0.2s;

        @media (min-width: 1024px) {
            padding: 1.25rem 6.25rem;
            margin-top: 0;
        }
    }

    header a:hover {
        top: 1px;
        right: 1px;
    }

    header a::after {
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

    header a:hover::after {
        top: 1px;
        right: 1px;
    }

    img {
        width: 100%;
        margin-top: 2.5rem;
        border-radius: 1rem;
    }


    h2 {
        margin-top: 1rem;
        color: var(--blue);
    }

    h3 {
        margin-top: 5px;
        font-size: 1rem;
        font-weight: var(--font-weight-semi);
        color: var(--blue);
    }

    p {
        margin-top: 10px;
        font-size: 1rem;
        font-weight: var(--font-weight-semi);
        color: rgb(5 5 66 / 65%);
    }

    @media screen and (min-width: 768px) {
        img {
            border-radius: 1.25rem;
        }

        h2 {
            margin-top: 1.563rem;
            font-size: 1.875rem;
        }

        h3 {
            margin-top: 10px;
            font-size: 1.125rem;
        }

        p {
            margin-top: 1rem;
            font-size: 1.375rem;
        }
    }

    @media screen and (min-width: 1440px) {
        img {
            border-radius: 1.5rem;
        }
        h2 {
            margin-top: 3.125rem;
            font-size: 2.5rem;
        }

        h3 {
            margin-top: 5px;
            font-size: 1.375rem;
        }

        p {
            margin-top: 1.875rem;
            font-size: 1.5rem;
        }
    }
</style>