<script>
    import GameDescriptive from './GameDescriptive.svelte';
    import {getGameDescriptives, gamesDescriptives, getGames, foundGames} from '../../js/AppController.js';
    import SearchComponent from "./SearchComponent.svelte";
    import {onMount} from "svelte";

    let jsonData = [] ;

    onMount(async () => {
        //await getGameDescriptives();
        //jsonData = [...gamesDescriptives];
        getGameInfo();
        console.log(jsonData);
    });

    let gameName ;
    /*async function getFoundGames(gameName) {
        console.log(gameName);
        await getGames(gameName);
        jsonData = [...foundGames];
        console.log(jsonData);
        clear();
    }

    function clear() {
        gameName = "";
    }*/
    
        async function getGameInfo() {
        fetch('http://127.0.0.1:3018/game', {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(json => {return json})
            .then(function (data) {
                jsonData = Object.entries(data.json());
                //console.log(data.json());
                //return data.json();
            })
            /*.then((data) => {
                
            })*/
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }
</script>


<div id="gameShopContainer">
    <SearchComponent id="searchBarShop" bind:value={gameName} on:submit={getFoundGames(gameName)} />
    <div id="gameDescriptiveContainer">
        {#each jsonData as {name, coast}}
            <!-- il est recommandé d'éviter la syntaxe {...game} (spread) car elle n'est pas optimale-->
            <GameDescriptive
                    gameName="name"
                    gameType="game.gameType"
                    gameSupport="game.gameSupport"
                    cost="coast"
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
