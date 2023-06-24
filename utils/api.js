import { API_URL, STRAPI_API_TOKEN } from './urls';

export const fetchDataFromApi =  (endpoint) => {

    const settings = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN
        },
    };  

    return fetch(`${API_URL}${endpoint}`, settings)
    .then((res) => res.json())
    // .then((data) => setData(data))
}

// const res=fetch(`${API_URL}${endpoint}`, settings,)
// .then((res) => res.json())
// .then((data) => setData(data))

// return res;
// }