<script>
    export let gameName;
    export let gameType;
    export let gameSupport;
    export let cost;
</script>

<div class="gameDescriptiveStyle">
    <p>{gameName}</p>
    <p>{gameType}</p>
    <p>{gameSupport}</p>
    <p>{cost}</p>
</div>

<style>
    .gameDescriptiveStyle {
        border: 1px solid black;
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
    }

</style>
