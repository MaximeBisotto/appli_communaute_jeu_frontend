<script>
    import GameDescriptive from './GameDescriptive.svelte';
    import {getGameDescriptives, gamesDescriptives, getGames, foundGames} from '../../js/AppController.js';
    import SearchComponent from "./SearchComponent.svelte";
    import {onMount} from "svelte";
    import Title from "../common/Title.svelte"

    let jsonData = [] ;

    onMount(async () => {
        await getGameDescriptives();
        jsonData = [...gamesDescriptives];
        console.log(jsonData);
    });

    let gameName ;
    async function getFoundGames(gameName) {
        console.log(gameName);
        await getGames(gameName);
        jsonData = [...foundGames];
        console.log(jsonData);
        clear();
    }

    function clear() {
        gameName = "";
    }
</script>

<Title tabName="Boutique" subTitleName=""/>
<div id="gameShopContainer">
    <SearchComponent id="searchBarShop" bind:value={gameName} on:submit={getFoundGames(gameName)} />
    <div id="gameDescriptiveContainer">
        {#each jsonData as game}
            <!-- il est recommandé d'éviter la syntaxe {...game} (spread) car elle n'est pas optimale-->
            <GameDescriptive
                    gameName="game.gameName"
                    gameType="game.gameType"
                    gameSupport="game.gameSupport"
                    cost="game.cost"
            />
        {/each}
    </div>
</div>

<style>
    #gameShopContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 40%;
        margin-left: 30%;
        margin-right: 30%;
    }

    #gameDescriptiveContainer {
        display: inherit;
        flex-direction: column;
        justify-content: space-around;
        border: 1px solid red;
    }
</style>