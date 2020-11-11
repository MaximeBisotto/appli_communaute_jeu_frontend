import {RequestService} from './requestService.js';


export let pseudo = "";
export let token = "";
const requestService = new RequestService();

export async function login(username, password) {
    //await requestService.doGet("http://127.0.0.1:3018/login?username=" + username + "&password=" + password);
	await requestService.doGet("http://127.0.0.1:3018/login", {'username': username, 'password': password});
    let results = await requestService.jsonData;
    if (results != null && results != false) {
        token = results;
    }
    pseudo = username;
}
