<script>
    import { Card } from "$lib";

    export let data;

    $: sortedList =
        data?.weLoveWebList
            ?.filter((item) => item.status === "published")
            ?.sort((a, b) => new Date(b.date_time) - new Date(a.date_time)) ||
        [];
</script>

<section>
    {#if sortedList.length > 0}

        <picture>
            <img
                src={`https://fdnd-agency.directus.app/assets/${sortedList[0].image}`}
                alt={sortedList[0].speaker || "Onbekende spreker"}
            />
        </picture>

        {#each sortedList as item}
            <Card
                title={item.title}
                speaker={item.speaker}
                job={item.job_title}
                link={item.website_link}
                date_time={item.date_time}
            />
        {/each}
    {/if}
</section>

<style>
    section {
        display: grid;
        width: 100%;
        grid-template-rows: auto;
        grid-template-columns: 1;
        gap: 1.5rem;

        @media (min-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1440px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-auto-rows: minmax(min-content, fit-content);
        }
    }

    section picture {
        width: 100%;
        height: auto;
        overflow: hidden;
        display: flex;
        align-items: center;

        @media (min-width: 1024px) {
            grid-row: 1 / 3;
            grid-column: 1 / 3;
        }

        @media (min-width: 1440px) {
            grid-row: 1 / 4;
            grid-column: 1 / 4;
        }
    }

    section picture img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 1.563rem;
        border: 2px solid #e9e0e965;
    }
</style>
