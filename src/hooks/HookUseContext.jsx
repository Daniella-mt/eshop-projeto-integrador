import { createContext, useState, useEffect } from "react";

import { fetchProducts, fetchCategories } from '../axios/config';

export const DataContext = createContext();

export const HookUseContext = ({ children }) => {

    const [usuario, setUsuario] = useState({});

    const [categories, setCategories] = useState([]);

    const [listaProdutos, setListaProdutos] = useState([]);

    const [itensCarrinho, setItensCarrinho] = useState([]);

    const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);

    const createProduct = async (url, section, nome, preco, descricao) => {
        const createProduto = {
            url,
            section,
            nome,
            preco,
            descricao,
            userId: 1
        }

        await fetchProducts.post('/produtos',
            {
                body: createProduto
            }
        )
        console.log('produto novo criado!');
        console.log(createProduto);
    }

    const getAllCategories = async () => {
        const response = await fetchCategories.get();

        const data = response.data;

        setCategories(data);
    }

    const getAllProducts = async () => {
        // const response = await fetchProducts.get('/products');
         const response = await fetchProducts.get();

        const data = response.data;
        setListaProdutos(data);
    }

    const deleteProduct = async (id) => {
        await fetchProducts.delete(`/produtos/${id}`);

        const filteredProdutos = listaProdutos.filter((produto) =>
            produto.id != id
        );
        setListaProdutos(filteredProdutos);
    }

    const updateProduct = async (url, section, nome, preco, descricao, id) => {
        const updatedProduto = {
            url,
            section,
            nome,
            preco,
            descricao,
            userId: 1
        }
        await fetchProducts.put(`/produtos/${id}`,
            {
                body: updatedProduto
            }
        );

    }

    const consultaUsuario = async () => {
        const usuario = await fetchProducts.post('/usuarios',
            {
                body: usuario,
            }
        );
        const response = usuario.data;
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <DataContext.Provider
            value={{
                usuario,
                setUsuario,
                consultaUsuario,
                listaProdutos,
                categories,
                itensCarrinho,
                setItensCarrinho,
                carrinhoVisivel,
                setCarrinhoVisivel,
                deleteProduct,
                updateProduct,
                createProduct
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
