<script>
    let username='', password='', mail='', city='', birthDate='', mobile='';
    let errorName='', errorPassword='', errorMail='', errorCity='', errorBirthDate='', errorMobile='';
    let token = '';

    function createAccount(username, password, mail, city, birthDate, mobile) {
        fetch('http://localhost:3018/register', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            },
            body: 'username=' + username + '&password=' + password + '&mail=' + mail + '&city=' + city + '&birthDate='
                + birthDate + '&mobile='+ mobile
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

<div>
    <p class="errorMessage" id="nameErrorMessage">{errorName}</p>
    <input name="username" id="username" type="text" bind:value={username} placeholder="votre identifiant"/>
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
    <button class="button_type1" on:click={createAccount(username, password, mail, city, birthDate, mobile)}>Valider</button>
    <button class="button_type1" on:click={() => {window.location = "http://localhost:5000/"}}>Annuler</button>
</div>

<style>

    input {
        width: 50%;
    }

    .errorMessage {
        color: red;
        font-style: italic;
        font-size: small;
    }

    .button_type1 {
        width: 50%;
        padding-top: 4%;
        padding-bottom: 4%;
        border-radius: 5%;
        background: #3891d7;
    }
</style>
