<script>
    import { createEventDispatcher } from 'svelte';

    export let value ;

    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submit');
</script>

<div class="findButton">
    <input type="text" bind:value="{value}" placeholder="Search a game"/>
    <button value={value} on:click={submit}>Search</button>
</div>

<style>
    .findButton {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid green;
    }

    .findButton > input {
        width:78%;
        height: 20%;
    }

    .findButton > button {
        width: 20%;
        height: 20%;
    }
</style>