<script>
    let gameName;
    let gameType;
    let gameSupport;
    let nbPlayer;
    let old;
    let description;
    let imgPath;
    let cost;
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