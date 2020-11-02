<script>
    import {login, pseudo} from "../../js/loginService.js";

    let inputId = "";
    let inputPassword = "";

    // cette données devra être stocké dans un store
    let pseudo2 = "no result";
    async function handleClickConnectButton() {
        console.log("send user : " + {inputId} + " , password : " + {inputPassword});
        await login(inputId, inputPassword);
        pseudo2 = pseudo;
    }

    async function enrollment() {

    }

</script>

<Title tabName="Se connecter" subTitleName=""/>

<div>
    <input type="text" bind:value={inputId} placeholder="votre identifiant"/>
    <input type="password" bind:value={inputPassword} placeholder="votre mot de passe"/>
    <a href="http://127.0.0.1:3301/forgottenPassword">mot de passe oublié</a>
</div>

<button on:click={handleClickConnectButton}>Connexion</button>
<button>Créer un compte</button>

<style>

</style>