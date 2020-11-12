<script>
    export let username;
    export let startdate;
    export let starttime;
    export let eventlocation;
    export let duration;
    export let idevent;
    export let token;
    
</script>

<div class="gameDescriptiveStyle">
	<p> {username} organise un évènement le {startdate} à {starttime} à {eventlocation} pendant {duration} minutes.</p>
    <a href="http://127.0.0.1/event/subscribe/{idevent}?token={token}"> S'inscrire</a>
</div>

<style>
    .gameDescriptiveStyle {
        border: 1px solid black;
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
    }

</style>
