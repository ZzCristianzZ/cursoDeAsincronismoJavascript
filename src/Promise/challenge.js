import fetch from 'node-fetch';
const API = 'http://api.escuelajs.co/api/v1';


function fetchData (urlApi) {
    return fetch(urlApi);
};

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products);
})
.then(() => {
    console.log('Hola')
})
.catch(error => console.log(error));

