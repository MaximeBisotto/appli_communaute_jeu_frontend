<script>
    //import Title from "../common/Title.svelte";

    let name='', password='', mail='', city='', birthDate='', mobile='';
    let errorName='', errorPassword='', errorMail='', errorCity='', errorBirthDate='', errorMobile='';
    let createAccountData = null;

    function createAccount(name, password, mail, city, birthDate, mobile) {
        fetch('http://localhost:3301/createAccount', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'name=' + name + '&password=' + password + '&mail=' + mail + '&city=' + city + '&birthDate='
                + birthDate + '&mobile='+ mobile
        })
            .then(json => {return json})
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                return data.json();
            })
            .then((data) => {
                createAccountData = data.result;
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }

    $: if (createAccountData != null) {
        console.log(createAccountData);
        if (createAccountData.error) {
            // si une erreur c'est produite
            for (let i=0; i < createAccountData.errors.length ; i++) {
                if (createAccountData.errors[i].hasOwnProperty('name')) {
                    errorName = createAccountData.errors[i].name;
                    console.log('error ' + createAccountData.errors[i].name);
                } else if (createAccountData.errors[i].hasOwnProperty('password')) {
                    errorPassword = createAccountData.errors[i].password;
                    console.log('error ' + createAccountData.errors[i].password);
                } else if (createAccountData.errors[i].hasOwnProperty('mail')) {
                    errorMail = createAccountData.errors[i].mail;
                    console.log('error ' + createAccountData.errors[i].mail);
                } else if (createAccountData.errors[i].hasOwnProperty('city')) {
                    errorCity = createAccountData.errors[i].city;
                    console.log('error ' + createAccountData.errors[i].city);
                } else if (createAccountData.errors[i].hasOwnProperty('birthDate')) {
                    errorBirthDate = createAccountData.errors[i].birthDate;
                    console.log('error ' + createAccountData.errors[i].birthDate);
                } else if (createAccountData.errors[i].hasOwnProperty('mobile')) {
                    errorMobile = createAccountData.errors[i].mobile;
                    console.log('error ' + createAccountData.errors[i].mobile);
                }
            }
        }
        else {
            console.log('redirection vers une autre page');
            // s'il n'y a pas d'erreur et que le compte a été créé
        }
    }

</script>


<div>
    <p class="errorMessage" id="nameErrorMessage">{errorName}</p>
    <input name="name" id="name" type="text" bind:value={name} placeholder="votre identifiant"/>
    <p class="errorMessage" id="passwordErrorMessage">{errorPassword}</p>
    <input name="password" id="password" type="password" bind:value={password} placeholder="votre mot de passe"/>
    <p class="errorMessage" id="mailErrorMessage">{errorMail}</p>
    <input name="mail" id="mail" type="email" bind:value={mail} placeholder="votre email"/>
    <p class="errorMessage" id="cityErrorMessage">{errorCity}</p>
    <input name="city" id="city" type="text" bind:value={city} placeholder="votre ville de residence"/>
    <p class="errorMessage" id="birthDateErrorMessage">{errorBirthDate}</p>
    <input name="birthDate" id="birthDate" type="date" bind:value={birthDate} placeholder="votre date de naissance"/>
    <p class="errorMessage" id="mobileErrorMessage">{errorMobile}</p>
    <input name="mobile" id="mobile" type="tel" pattern="[0]{1}[6-7]{1}[0-9]{8}" bind:value={mobile} placeholder="votre numéro de mobile"/>
</div>
<button on:click={createAccount(name, password, mail, city, birthDate, mobile)}>Valider</button>
<button on:click={() => {}}>Annuler</button>

<style>
    .errorMessage {
        color: red;
        font-style: italic;
        font-size: small;
    }

    .inputError {
        border:1px solid red;
    }
</style>