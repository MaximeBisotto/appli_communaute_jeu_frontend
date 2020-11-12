<script>
    export let gameName;
    export let gameType;
    export let gameSupport;
    export let cost;
</script>

<div class="gameDescriptiveStyle">
    <span>Nom du jeu : {gameName}</span>
    <span>Type de jeu : {gameType}</span>
    <span>Support de jeu : {gameSupport}</span>
    <span>Prix : {cost}</span>
</div>

<style>
    .gameDescriptiveStyle {
        width:100%;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin-bottom: 1em;

    }
</style>
