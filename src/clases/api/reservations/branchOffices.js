import ReservationsApi from "./reservations";

export default class BranchOffices {
    static list(callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: '/branch_offices'
        }).then(function (response) {
            callback(response);
        });
    }

    static get(id, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'get',
            url: `/branch_offices/${id}`
        }).then(function (response) {
            callback(response);
        });
    }

    static store(data, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'post',
            url: '/branch_offices',
            data: data
        }).then(function (response) {
            callback(response);
        });
    }

    static update(id, data, callback) {
        return ReservationsApi.ConfiguredAxios({
            method: 'patch',
            url: `/branch_offices/${id}`,
            data: data
        }).then(function (response) {
            callback(response);
        });
    }
}
