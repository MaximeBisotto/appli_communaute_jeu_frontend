import {RequestService} from './requestService.js';

export let pseudo = "";
const requestService = new RequestService();

export async function login(username, password) {
    await requestService.doPost("http://127.0.0.1:3301/login", {user: username, pass: password});
    let results = await requestService.jsonData;
    let tmpPseudo = "inconnu";
    if (results != null && results.hasOwnProperty('pseudo')) {
        tmpPseudo = results.pseudo;
    }
    pseudo = tmpPseudo;
}