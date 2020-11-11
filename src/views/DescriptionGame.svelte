<script>
    import GameDescritptive from "../components/gameDescriptive/gameDescriptive.svelte";
    import Title from "../components/common/Title.svelte";
    import {onMount} from "svelte";

    export let gameName ;
    let gameResult = null ;
    let displayResult = false;
    onMount((game = {gameName}) => {
        fetch('http://localhost:3301/gameDescriptive?game='+ {game}, {
            method: 'get'
        })
            .then(json => {return json})
            .then(function (data) {
                return data.json();
            })
            .then((data) => {
                gameResult = data;
                console.log(gameResult);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    });

    $: if (gameResult != null) {
        displayResult = true;
    }

</script>

<main>
    <Title tabName="Descrition du jeu" subTitleName="{gameName}"/>
    {#if displayResult}
        <GameDescritptive gameName="{gameResult.gameName}" gameType="{gameResult.gameType}"
                          gameSupport="{gameResult.gameSupport}" nbPlayer="{gameResult.nbPlayer}"
                          old="{gameResult.old}" description="{gameResult.description}"
                          imgPath="{gameResult.imgPath}" cost="{gameResult.cost}" />
    {/if}
</main>

<style>

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>