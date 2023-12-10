import { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../Contexts/HookUseContext';

import CarrinhoItem from "../CarrinhoItem/CarrinhoItem";

import { FaWindowClose } from "react-icons/fa";

import HookUseCart from '../../hooks/HookAddToCart';

import styles from './Carrinho.module.css';

const Carrinho = () => {
    const [cart, setCart] = useState([]);

    const { carrinhoVisivel, setCarrinhoVisivel } = useContext(DataContext);

    const { getLocalStorage } = HookUseCart();

    useEffect(() => {
        setCart(
            getLocalStorage()
        )
    }, [])

    return (
        <div
            className={`${styles.carrinho} ${carrinhoVisivel ? styles.carrinho_ativo : ''}`}
        >
            <div className={styles.botao_close_mobile}>
                <FaWindowClose
                    onClick={() => setCarrinhoVisivel(!carrinhoVisivel)}
                />
            </div>
            <div className={styles.carrinho_itens}>
                {cart &&
                    cart.map((item) =>
                        <CarrinhoItem key={item.id}
                            item={{ ...item }}
                        />
                    )}
            </div>
            <div className={styles.carrinho_resumo}>
                <h3>Resumo do carrinho</h3>
                <span>Total: 000</span>
            </div>
        </div>
    )
}

export default Carrinho;
