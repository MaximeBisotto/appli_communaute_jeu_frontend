<script>
    let name;
    let password;
    let mail;
    let city;
    let birthDate;
    let mobile;

    // cette données devra être stocké dans un store
    let pseudo2 = "no result";
    async function handleClickConfirmButton() {
        console.log("send user : " + {inputId} + " , password : " + {inputPassword});
        await login(inputId, inputPassword);
        pseudo2 = pseudo;
    }

    async function enrollment() {

    }

</script>

<Title tabName="Créer un compte" subTitleName=""/>

<div>
    <input type="text" bind:value={name} placeholder="votre identifiant"/>
    <input type="password" bind:value={password} placeholder="votre mot de passe"/>
    <input type="email" bind:value={mail} placeholder="votre identifiant"/>
    <input type="text" bind:value={city} placeholder="votre identifiant"/>
    <input type="date" bind:value={birthDate} placeholder="votre identifiant"/>
    <input type="tel" pattern="[0]{1}[6-7]{1}[0-9]{8}" bind:value={mobile} placeholder="votre identifiant"/>
</div>

<button on:click={handleClickConnectButton}>Valider</button>
<button on:click={() => {}}>Annuler</button>

<style>

</style>