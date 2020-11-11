<script>
    export let gameName;
    export let gameType;
    export let gameSupport;
</script>

<a href={"http://localhost:5000/descriptionGame?game=" + gameName}>
    <div class="gameDescriptive2">
        <p>{gameName}</p>
        <p>{gameType}</p>
        <p>{gameSupport}</p>
    </div>
</a>

<style>
    .gameDescriptive2 {
        border: 1px solid black;
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
    }
</style>