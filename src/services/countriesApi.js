const apiUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
    getByName: (name) => {
        return fetch(apiUrl + name);
    },
};