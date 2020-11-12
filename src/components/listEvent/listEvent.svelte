<script>
    import {onMount} from "svelte";
    import { token } from '../../store/userInfo.js';
    import EventDescriptive from './EventDescriptive.svelte';

    let jsonData = [] ;

    onMount(async () => {
        //await getGameDescriptives();
        //jsonData = [...gamesDescriptives];
        getEventInfo();
    });

    let gameName ;
    async function getFoundGames(gameName) {
        console.log(gameName);
        await getGames(gameName);
        jsonData = [...foundGames];
        //console.log(jsonData);
        clear();
    }

    function clear() {
        gameName = "";
    }
    
        /*async*/ function getEventInfo() {
        fetch('http://127.0.0.1:3018/event', {
            method: 'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then((response) => {
                let contentType = response.headers.get("content-type");
                if (response.ok) {
                    if (contentType && contentType.indexOf("application/json") !== -1) {
                        return response.json();
                    } else {
                        console.log(response.headers.toString());
                    }
                }
            })
            .then((json) => {
                jsonData = json;
                console.log(jsonData);
                //jsonData = [...json.result];
                //return data.json();
            })
            /*.then((data) => {
                
            })*/
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }
</script>


<div id="gameShopContainer">
    <div id="gameDescriptiveContainer">
        {#each jsonData as {username, startdate, starttime, eventlocation, duration, idevent}}
            <EventDescriptive
                    username={username}
    				startdate={startdate}
    				starttime={starttime}
    				eventlocation={eventlocation}
    				duration={duration}
    				idevent={idevent}
    				token={$token}
  			/>
        {/each}
    </div>
</div>

<style>
    #gameShopContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 40%;
        margin-left: 30%;
        margin-right: 30%;
    }

    #gameDescriptiveContainer {
        display: inherit;
        flex-direction: column;
        justify-content: space-around;
        border: 1px solid red;
    }
</style>
