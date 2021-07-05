import axios from "axios";
// const axios = require("axios")

export const path = {
    get: 'http://127.0.0.1:5000/',
    post: 'http://127.0.0.1:5000/create',
    put: 'http://127.0.0.1:5000/edit',
    delete: 'http://127.0.0.1:5000/delete',
};

export class Request {
    static async getRequest(path) {
        let response = await axios
            .get(path)
            .catch( (err) => {
                console.log(err);
            })
        console.log(`\nGET\nResponse:`)
        console.log(response.data);
        return response.data;
    }

    static async postRequest(path, data) {
        await axios
            .post(path, data)
            .then( () => {
                console.log("\nPOST\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static async putRequest(path, data) {
        await axios
            .put(path, data)
            .then( () => {
                console.log("\nPUT\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static async deleteRequest(path, data) {
        await axios
            .delete(path, { data: data })
            .then( () => {
                console.log("\nDELETE\nRequest:");
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}