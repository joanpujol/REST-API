module.exports = class controllerResponse {
    constructor(statusCode, jsonResponse) {
        this.statusCode = statusCode;
        
        if(jsonResponse) {
            this.jsonResponse = jsonResponse;
        }
    }

    hasJsonReponse() {
        return this.jsonResponse ? true : false;
    }

    sendResponse(res) {
        if(this.hasJsonReponse()) {
            res.status(this.statusCode).json(this.jsonResponse)
        } else {
            res.status(this.statusCode).end();
        }
    }
}
