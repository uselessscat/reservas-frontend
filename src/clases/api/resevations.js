const axios = require('axios');

export const RESERVATIONS_API_URL = "http://localhost:7353"

class Persons {
    static list(callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: '/persons'
        }).then(function (response) {
            callback(response);
        });
    }

    static store(data, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'post',
            url: '/persons',
            data: data
        }).then(function (response) {
            callback(response);
        });
    }
}

export default class ReservationsApi {
    static ConfiguredAxios = axios.create({
        baseURL: RESERVATIONS_API_URL
    });

    static get Persons() {
        return Persons;
    }

    static implodeParameters(params) {
        let parameters = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
        })

        return parameters.join('&');
    }
}