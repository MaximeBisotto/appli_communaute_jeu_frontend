<script>
    export let gameName;
    export let gameType;
    export let gameSupport;
    export let nbPlayer;
    export let old;
    export let description;
    export let imgPath;
    export let cost;
</script>

<div class="gameDescriptiveStyle">
    <p>{gameName}</p>
    <p>{gameType}</p>
    <p>{gameSupport}</p>
    <p>{nbPlayer}</p>
    <p>{old}</p>
    <p>{description}</p>
    <img src="{imgPath}" alt="{gameName} picture">
    <button>Acheter {gameName} {cost}</button>
</div>

<style>
    .gameDescriptiveStyle {
        border: 1px solid black;
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
    }

</style>