import ReservationsApi from "./reservations";

export default class Persons {
    static list(callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: '/persons'
        }).then(function (response) {
            callback(response);
        });
    }

    static get(id, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: `/persons/${id}`
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

    static update(id, data, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'patch',
            url: `/persons/${id}`,
            data: data
        }).then(function (response) {
            callback(response);
        });
    }
}