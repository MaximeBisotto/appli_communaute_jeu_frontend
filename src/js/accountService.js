import {RequestService} from './requestService.js';

export let responseData = "";
const requestService = new RequestService();

export async function createAccount(name, password, mail, city, birthDate, mobile) {
    await requestService.doPost("http://127.0.0.1:3301/createAccount", {name:name, pass:password, mail:mail, city:city, birthDate:birthDate, mobile:mobile});
    let results = await requestService.jsonData;
    if (results != null && results.hasOwnProperty('result')) {
        responseData = results.result;
    }
    else {
        responseData = {result : {error: "resultat null lors du traitement de la requete coté client"}};
    }
}

