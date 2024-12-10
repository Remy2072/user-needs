<section>
    <article>
        <h2>Wat is een We Love Web?</h2>
        <p>
            We Love Web is een inspirerend evenement georganiseerd door de
            opleiding FDND. Tijdens dit evenement verwelkomen we een spreker uit
            het frontend- of designvakgebied die zijn of haar persoonlijke
            verhaal deelt. De spreker neemt je mee in hun werkervaring,
            inzichten en geeft een kijkje in de dagelijkse werkprocessen binnen
            hun vakgebied. Het doel van We Love Web is om studenten en
            professionals te inspireren, kennis te delen en een kijkje te geven
            in de praktijk van het werk als frontend developer of designer.
        </p>
    </article>
    <picture>
        <img src="/img/weloveweb.jpg" alt="foto van een event" />
    </picture>
</section>

<style>
    section {
        display: flex;
        flex-direction: column; 
        gap: 10px;
    }

    img {
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
    }

    h2 {
        margin-top: 50px;
        font-size: 30px;
        color: var(--blue);
    }

    p {
        margin-top: 5px;
        font-size: 18px;
        line-height: 1.6;
        color: var(--blue);
    }

    @media (min-width: 1224px) {
        section {
            flex-direction: row; 
            gap: 20px;
        }

        article,
        picture {
            flex-basis: 50%;
            max-width: 50%;
        }

        img {
            width: 100%;
            height: auto;
            margin-top: 50px;
        }

        p {
            font-weight: var(--font-weight-semi);
        }
    }

    @media (min-width: 1440px) {
        h2 {
            font-size: 40px;
        }

        p {
            font-size: 20px;
            font-weight: var(--font-weight-semi);
        }
    }
</style>