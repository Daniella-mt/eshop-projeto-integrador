import axios from "axios";

export const fetchProducts = axios.create({
    baseURL: 'https://projetojpsenac.000webhostapp.com/api/dev',
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchCategories = axios.create({
    baseURL: 'https://projetojpsenac.000webhostapp.com/api',
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchUsers = axios.create({
    baseURL: 'https://projetojpsenac.000webhostapp.com/api',
    headers: {
        "Content-Type": "application/json"
    }
});