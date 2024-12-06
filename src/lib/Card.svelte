<script>
    export let speaker = "";
    export let title = "";
    export let shortDesc = "";
    export let time = "";
    export let date = "";

    
    $: isPast = new Date(date) < new Date();
    console.log("new Date(date)",new Date(date))
    console.log("date",date)
    console.log("new date()",new Date())
</script>

<article class:is-past={isPast}>
    <a href="#/" aria-label="We Love Web Event">
        <h2 class:is-past={isPast}>{title}</h2>
        <h3 class:is-past={isPast}>{speaker}</h3>
        <p>{shortDesc}</p>
        <div>
            <time class:is-past={isPast}>{time}</time>
            <time class:is-past={isPast}>{date}</time>

</script>

<article>
    <a
        href="#/"
        aria-label="Event: Vasilis van Gemert, WE ❤️ WEB, Spotify lezing at 13:00 on 07-09"
    >
        <h2>{speaker}</h2>
        <h3>{title}</h3>
        <p>{shortDesc}</p>
        <div>
            <time datetime="13:00">{time}</time>
            <time datetime="07-09-2024">{date}</time>

        </div>
    </a>
</article>

<style>
    article {
        border: solid 2px rgba(233, 224, 233, 65);
        border-radius: 1.563rem;
        position: relative;
        padding: 1.25rem 1.5rem 1.25rem 2.875rem;
        background-color: transparent;
         published-filter
        cursor: pointer;
    }

    article.is-past::before {
        background-color: var(var(--fifthyshadesofgrey));
    }

    article::before {
        content: "";
        height: 6.25rem;
        width: 3px;
        background-color: var(--blue);
        position: absolute;
        top: 22%;
        left: 1.563rem;
        border-radius: 6.25rem;
    }

    article:hover {
        border: solid 2px var(--blue);
        transform: scale(1.05);
        transition: 0.7s;

    }

    article::before {
        content: "";
        height: 6.25rem;
        width: 3px;
        background-color: var(--blue);
        position: absolute;
        top: 22%;
        left: 1.563rem;
        border-radius: 6.25rem;

    }

    h2 {
        color: var(--purple);
        font-size: 1.4rem;
    }


    h2.is-past,
    h3.is-past,
    time.is-past {
        color: var(--fifthyshadesofgrey);
    }

    h3 {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-sm);
        color: var(--blue);
        margin-top: 4px;
    }

    p {
        margin-top: 1.375rem;
        color: var(--fifthyshadesofgrey);
        font-weight: var(--font-weight-reg);
        font-size: var(--font-size-sm);
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
    }

    time {
        font-weight: var(--font-weight-semi);
        font-size: 1.25rem;
        color: var(--black);
    }


    h3 {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-sm);
        color: var(--blue);
        margin-top: 4px;
    }

    p {
        margin-top: 1.375rem;
        color: var(--fifthyshadesofgrey);
        font-weight: var(--font-weight-reg);
        font-size: var(--font-size-sm);
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
    }

    time {
        font-weight: var(--font-weight-semi);
        font-size: 1.25rem;
        color: var(--black);
    }

    time:nth-child(2) {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-md);
        color: var(--fifthyshadesofgrey);
    }
</style>
