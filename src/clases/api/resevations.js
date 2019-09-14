const axios = require('axios');

export const RESERVATIONS_API_UR = "http://localhost:7353"

class Persons {
    static get(callback) {
        let params = ReservationsApi.implodeParameters({});

        axios.get(RESERVATIONS_API_UR + '/persons?' + params)
            .then(function (response) {
                callback(response);
            });
    }
}

class ReservationsApi {
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

export default ReservationsApi;