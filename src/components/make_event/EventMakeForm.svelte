<script>
    import {createEventDispatcher} from "svelte";
    import { token } from '../../store/userInfo.js';

    let eventName ;
    let organizerName ;
    let organizerFullName ;
    let mobilePhoneNumber ;
    let maximumPlayerNumber ;
    let mail ;
    let eventLocation ;
    let game ;
    let date ;
    let autorizedLate ;
    let beginTime ;
    let duration ;

    // make a json object
    export let value ;

    const dispatch = createEventDispatcher();
    //const submit = () => dispatch('submit');
    
    function submit() {
        fetch('http://localhost:3018/event/create', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            },
            body: 'maxPlayer=' + maximumPlayerNumber + '&eventLocation=' + eventLocation + '&startDate=' + date + '&startTime=' + beginTime + '&duration='
                + duration + '&lateMax='+ autorizedLate + '&token=' + token 
        })
            .then(json => {return json})
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                //return data.json();
            })
            /*.then((data) => {
                createAccountData = data.result;
            })*/
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }
</script>

<div id="formMakerContainer">
    <input type="text" bind:value="{eventName}" placeholder="Event name"/>
    <input type="text" bind:value="{organizerName}" placeholder="Organizer name"/>
    <input type="text" bind:value="{organizerFullName}" placeholder="Organizer full name"/>
    <input type="text" bind:value="{mobilePhoneNumber}" placeholder="Mobile phone number"/>
    <input type="text" bind:value="{maximumPlayerNumber}" placeholder="Maximum player number"/>
    <input type="text" bind:value="{mail}" placeholder="Mail"/>
    <input type="text" bind:value="{eventLocation}" placeholder="Event location"/>
    <input type="text" bind:value="{game}" placeholder="Game"/>
    <input type="text" bind:value="{date}" placeholder="01/01/2020"/>
    <input type="text" bind:value="{autorizedLate}" placeholder="Retard autorisé en minute"/>
    <input type="text" bind:value="{beginTime}" placeholder="20h00"/>
    <input type="text" bind:value="{duration}" placeholder="Durée de l'évènement en minutes'"/>
    <button value={value} on:click={submit}>Créer l'événement</button>
</div>

<style>

</style>
