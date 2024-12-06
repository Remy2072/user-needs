<script>
    import { Svg } from "$lib";

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<nav>
    <ul>
        <li><Svg name="hva-fdnd" /></li>
        <li><button id="menu-btn" onclick={toggleMenu}>MENU</button></li>
    </ul>
    <ul id="menu-content" class:menu-open={menuOpen}>
        <li>Home</li>
        <li>We Love Webs</li>
        <li>FDND Agency</li>
        <li>Archief</li>
        <li><a href="https://www.google.nl">Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        width: 100%;
        position: relative;
        padding-top: 1rem;
        margin-bottom: -1px;

        @media (min-width: 1024px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    nav ul:nth-child(1) {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 1024px) {
            width: 25%;
            justify-content: center;
        }
    }

    nav ul:nth-child(1) li:nth-child(2) {
        z-index: 5;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    nav ul:nth-child(1) button::before {
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
    }

    nav ul:nth-child(1) button {
        position: relative;
        border: 1px solid var(--blue);
        padding: 0.5rem 1rem;
        background-color: var(--green);
        border-radius: 10px;
        color: var(--blue);
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
    }

    nav ul:nth-child(1) button:hover {
        right: 1px;
        top: 1px;
    }

    nav ul:nth-child(1) button:hover::before {
        right: 1px;
        top: 1px;
    }

    nav ul:nth-child(1) button:active {
        right: 2px;
        top: 2px;
    }

    nav ul:nth-child(1) button:active::before {
        right: 1px;
        top: 1px;
    }

    nav ul:nth-child(2) {
        padding: 3rem 0;
        width: calc(100% + 2rem);
        height: 100vh;
        background-color: #000000aa;
        position: absolute;
        top: 0;
        right: calc(-3rem - 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transition: 450ms cubic-bezier(0, 0.62, 0.57, 1.02);
        z-index: 2;
        font-size: 1rem;

        @media (min-width: 1024px) {
            border-radius: 2.5rem 2.5rem 0 0;
            background: linear-gradient(
                150deg,
                #fefdff 0%,
                #fcf9ff 60%,
                #fbf8ff 100%
            );
            position: relative;
            top: auto;
            right: auto;
            flex-direction: row;
            justify-content: space-between;
            height: 100%;
            width: 75%;
            padding: 2rem 8%;
            font-size: 0.9rem;
        }

        @media (min-width: 1440px) {
            font-size: 1rem;
            padding: 2rem 14%;
        }
    }

    @media (min-width: 1024px) {
        nav ul:nth-child(2)::before {
            content: "";
            position: absolute;
            left: 0rem;
            bottom: -1px;
            transform: translateX(-100%);
            width: var(--radius);
            height: var(--radius);
            background: radial-gradient(
                    circle at left top,
                    transparent 1.48rem,
                    var(--white) 1.48rem
                )
                border-box;
        }
    }

    nav ul:nth-child(2).menu-open {
        right: -1rem;
    }

    nav ul:nth-child(2) li {
        color: #fff;
        transition: 300ms;
        list-style-type: none;

        @media (min-width: 1024px) {
            color: var(--blue);
        }
    }

    nav ul:nth-child(2) li a {
        color: #fff;
        transition: 300ms;
        text-decoration: none;

        @media (min-width: 1024px) {
            color: var(--blue);
            border: 3px solid var(--purple);
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
        }
    }
</style>
