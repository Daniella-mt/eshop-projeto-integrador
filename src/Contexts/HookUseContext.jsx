import { createContext, useState, useEffect } from "react";

import { fetchProducts } from '../axios/config';

export const DataContext = createContext();

export const HookUseContext = ({ children }) => {

    const [usuario, setUsuario] = useState({});

    const [listaProdutos, setListaProdutos] = useState([]);

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

        await fetchProducts.post('/produto/ALL',
            {
                body: createProduto
            }
        )
        console.log('produto novo criado!');
        console.log(createProduto);
    }

    const getAllProducts = async () => {
        try {
            const response = await fetchProducts.get('/produto/ALL');

            const data = response.data.result.produtos;
            
            setListaProdutos(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (id) => {
        await fetchProducts.delete(`produto/ALL/${id}`);

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
        await fetchProducts.put(`/produto/ALL/${id}`,
            {
                body: updatedProduto
            }
        );

    }

    const consultaUsuario = async () => {
        const usuario = await fetchUsers.post('/usuarios',
            {
                body: usuario,
            }
        );
        const response = usuario.data;
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <DataContext.Provider
            value={{
                usuario,
                setUsuario,
                consultaUsuario,
                listaProdutos,
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