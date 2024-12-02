<script>
    import { Card } from "$lib";

    export let data;

    $: sortedList = data?.weLoveWebList?.sort((a, b) => new Date(b.date_time) - new Date(a.date_time)) || [];

    const formatTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (dateTime) => {
        const date = new Date(dateTime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}-${month}`;
    };
</script>

<section>
    {#if sortedList.length > 0}
        <picture>
            <img
                src={`https://fdnd-agency.directus.app/assets/${sortedList[0].image}`}
                alt={sortedList[0].speaker}
            />
        </picture>

        {#each sortedList as item}
            <Card
                speaker={item.speaker}
                title={item.title}
                shortDesc={item.short_description}
                time={formatTime(item.date_time)} 
                date={formatDate(item.date_time)} 
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
            grid-template-rows: repeat(2, calc(185px + 0.75rem)) repeat(2, 1fr);
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
    }

    section picture img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 25px;
        border: 2px solid #e9e0e965;
    }
</style>
