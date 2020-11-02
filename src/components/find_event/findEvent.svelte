<script>
    import Title from '../common/Title.svelte';
</script>

<Title></Title>

<p>Choisir une ville ou utiliser la géolocalisation</p>
<input type="text" value="" placeholder="ville de l'événement"/>

<select id="distance-select">
    <option value="">--Please choose an option--</option>
    <option value="5">Dog</option>
    <option value="10">Cat</option>
    <option value="15">Hamster</option>
    <option value="20">Parrot</option>
    <option value="25">Spider</option>
    <option value="50">Goldfish</option>
</select>
<input type="date" value="" placeholder="Date de l'événement"/>

<div class="eventContainer">

</div>

<button>Rechercher</button>


<style>

</style>