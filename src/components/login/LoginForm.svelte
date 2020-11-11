<script>
    import {login, pseudo} from "../../js/loginService.js";
    import { token } from '../../store/userInfo.js';
    

    let inputId = "";
    let inputPassword = "";

    // cette données devra être stocké dans un store
    //export const token = writable("");
    async function handleClickConnectButton() {
        fetch('http://127.0.0.1:3018/login', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            },
            body: 'username=' + inputId + '&password=' + inputPassword
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
                token.set(json);
                //console.log(json.json());
                //return data.json();
            })
            /*.then((data) => {
                
            })*/
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }

</script>

<div>
    <input type="text" bind:value={inputId} placeholder="votre identifiant"/>
    <input type="password" bind:value={inputPassword} placeholder="votre mot de passe"/>
    <a href="http://127.0.0.1:3301/forgottenPassword">mot de passe oublié</a>
</div>

<button on:click={handleClickConnectButton}>Connexion</button>
<button>Créer un compte</button>

<style>

</style>
