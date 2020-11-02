export class RequestService {
    jsonData;

    constructor() {
        this.jsonData = "";
    }

    async doPost(url, paramJson) {
        this.jsonData = "";
        let myInit = {
            method: 'POST',
            body: paramJson
        };
        await fetch(url, myInit)
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
                this.jsonData = json;
                console.log(this.jsonData);
                return json;
            })
            .catch((error) => {
                console.log('error', error);
            });
        return this.jsonData;
    }

    async doGet(url) {
        this.jsonData = "";
        await fetch(url)
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
                this.jsonData = json;
                console.log(this.jsonData);
                return json;
            })
            .catch((error) => {
                console.log('error', error);
            });
        return this.jsonData;
    }

    setData(jsonData) {
        this.jsonData = jsonData;
    }

    getData() {
        return this.jsonData;
    }
}
