<script>
    import GameDescriptive from './GameDescriptive.svelte';
    //import {getGameDescriptives, gamesDescriptives, getGames, foundGames} from '../../js/AppController.js';
    import SearchComponent from "./SearchComponent.svelte";
    import {onMount} from "svelte";

    $: jsonData = [] ;
    let gameName ;

    function getGames(gameName) {
        fetch('http://localhost:3018/game/info?gameName='+ gameName, {
            method: 'get'
        })
            .then(json => {return json})
            .then(function (data) {
                return data.json();
            })
            .then((data) => {
                //jsonData = [...data.result];
                //jsonData=Object.entries(data);
                jsonData = data;
                console.log(jsonData);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
        clear();
    }

    function getGameDescriptives2() {
        fetch('http://localhost:3018/game', {
            method: 'get'
        })
            .then(json => {return json})
            .then(function (data) {
                return data.json();
            })
            .then((data) => {
                //jsonData = [...data.result];
                jsonData=data
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }

    onMount(() => {
        getGameDescriptives2();
    });

    function clear() {
        gameName = "";
    }
/*
    onMount(async () => {
        await getGameDescriptives();
        jsonData = [...gamesDescriptives];
        console.log(jsonData);
    });
*/
    /*

    async function getFoundGames(gameName) {
        console.log(gameName);
        await getGames(gameName);
        jsonData = [...foundGames];
        console.log(jsonData);
        clear();
    }
*/

    
        /*async*/ /*function getGameInfo() {
        fetch('http://127.0.0.1:3018/game', {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(json => {return json})
            .then(function (data) {
                jsonData = data.json();
                console.log(jsonData);
                jsonData = Object.entries(jsonData);
                console.log(jsonData);
                //console.log(data.json());
                //return data.json();
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }*/

    /*
    let jsonData2 = [
        {
            name:"monopoly",
            cost:"10.50 euros",
            type:'strategie',
            support:'plateau'
        },
        {
            name:"cluedo",
            cost:"22.99 euros",
            type:'strategie',
            support:'plateau'
        }
    ]

     */


</script>


<div id="gameShopContainer">
    <SearchComponent id="searchBarShop" bind:value={gameName} on:submit={getGames(gameName)} />
    <div id="gameDescriptiveContainer">
        {#each jsonData as {name, cost, type, support}}
            <GameDescriptive
                    gameName="{name}"
                    gameType="{type}"
                    gameSupport="{support}"
                    cost="{cost}"
            />
        {/each}
    </div>
</div>

<style>
    #gameShopContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 3%;
    }

    #gameDescriptiveContainer {
        display: inherit;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 3%;
    }
</style>
