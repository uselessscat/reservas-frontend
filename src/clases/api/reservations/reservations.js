import Persons from './persons';

const axios = require('axios');

export const RESERVATIONS_API_URL = process.env.REACT_APP_API_URL

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
