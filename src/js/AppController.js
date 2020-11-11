import {RequestService} from "./requestService";

export let gamesDescriptives ;
const requestService = new RequestService();

export async function getGameDescriptives() {
    await requestService.doGet('http://127.0.0.1:3018/game');
    let results = await requestService.jsonData;
    gamesDescriptives = (results != null/* && results.hasOwnProperty('games')*/) ? results/*.games*/ : "aucune description";
    return results;
}

export let foundGames ;
export async function getGames(gameName) {
    await requestService.doGet('http://127.0.0.1:3301/searchGame?gameName=' + gameName);
    let results = await requestService.jsonData;
    foundGames = (results != null && results.hasOwnProperty('foundGames')) ? results.foundGames : "aucune description";
    return results;
}
