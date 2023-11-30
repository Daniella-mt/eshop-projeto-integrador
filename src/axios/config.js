import axios from "axios";

export const fetchProducts = axios.create({
    // baseURL: 'https://fakestoreapi.com',
    // baseURL: 'https://andreasfreitag90.infinityfreeapp.com/php/teste',
    baseURL: 'https://my-json-server.typicode.com/Daniella-mt/e-shop-api-react/produtos',
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchCategories = axios.create({
    // baseURL: 'https://fakestoreapi.com/products/categories',
    // baseURL: 'https://andreasfreitag90.infinityfreeapp.com/php/teste',
    baseURL: 'https://my-json-server.typicode.com/Daniella-mt/e-shop-api-react/produtos',
    headers: {
        "Content-Type": "application/json"
    }
})


