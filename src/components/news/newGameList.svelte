<script>
    import {onMount} from "svelte";
    import GameDescriptive from "./gameDescriptive.svelte"

    let newsData = [];
    let news = false;
    onMount(() => {
        fetch('http://localhost:3301/allNews', {
            method: 'get'
        })
            .then(json => {return json})
            .then(function (data) {
                return data.json();
            })
            .then((data) => {
                newsData = [...data.result];
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    });

    $: if (newsData != null) {
        news = true;
    }


</script>

<div class="newsListContainer">
    {#if news}
        {#each newsData as games }
            <GameDescriptive
                gameName={games.gameName}
                gameType={games.gameType}
                gameSupport={games.gameSupport}
            />
        {/each}
    {/if}
</div>

<style>
    .newsListContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 40%;
        margin-left: 30%;
        margin-right: 30%;
    }
</style>

