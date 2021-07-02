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
        console.log("GET")
        console.log("Response");
        console.log(response.data);
        return response.data;
    }

    static postRequest(path, data) {
        axios
            .post(path, data)
            .then( () => {
                console.log("POST")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static putRequest(path, data) {
        axios
            .put(path, data)
            .then( () => {
                console.log("PUT")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static deleteRequest(path, data) {
        axios
            .delete(path, { data: data })
            .then( () => {
                console.log("DELETE")
            })
            .catch((err) => {
                console.log(err);
            })
    }
}