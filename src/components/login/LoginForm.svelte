<script>
    import { token } from '../../store/userInfo.js';

    let inputId = "";
    let inputPassword = "";

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
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }

</script>

<div class="formLoginContainer">
    <input type="text" bind:value={inputId} placeholder="votre identifiant"/>
    <input type="password" bind:value={inputPassword} placeholder="votre mot de passe"/><br/>
    <a href="http://localhost:5000/forgottenPassword">mot de passe oublié</a><br/>
    <button class="button_type1" on:click={handleClickConnectButton}>Connexion</button>
    <button class="button_type1"><a href="http://localhost:5000/createAccount">Créer un compte</a></button>
</div>

<style>
    input {
        width: 50%;
    }

    a {
        display: inline-block;
        margin-bottom: 3%;
    }

    .formLoginContainer {
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .button_type1 {
        width: 50%;
        padding-top: 4%;
        padding-bottom: 4%;
        border-radius: 5%;
        background: #3891d7;
    }
</style>