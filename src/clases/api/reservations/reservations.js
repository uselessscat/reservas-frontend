import Persons from './persons';
import BranchOffices from './branchOffices';
import Roles from './roles';

const axios = require('axios');

export const RESERVATIONS_API_URL = process.env.REACT_APP_API_URL

export default class ReservationsApi {
    static ConfiguredAxios = axios.create({
        baseURL: RESERVATIONS_API_URL
    });

    static get Persons() {
        return Persons;
    }

    static get BranchOffices() {
        return BranchOffices;
    }

    static get Roles() {
        return Roles;
    }

    static implodeParameters(params) {
        let parameters = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
        })

        return parameters.join('&');
    }
}
