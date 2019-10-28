import ReservationsApi from "./reservations";

export default class Services {
    static list(callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: '/services'
        }).then(function (response) {
            callback(response);
        });
    }
    /*
    static get(id, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: `/roles/${id}`
        }).then(function (response) {
            callback(response);
        });
    }

    static store(data, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'post',
            url: '/roles',
            data: data
        }).then(function (response) {
            callback(response);
        });
    }

    static update(id, data, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'patch',
            url: `/roles/${id}`,
            data: data
        }).then(function (response) {
            callback(response);
        });
    }*/
}
