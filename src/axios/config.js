import axios from "axios";

export const fetchProducts = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchCategories = axios.create({
    baseURL: 'https://fakestoreapi.com/products/categories',
    headers: {
        "Content-Type": "application/json"
    }
})


