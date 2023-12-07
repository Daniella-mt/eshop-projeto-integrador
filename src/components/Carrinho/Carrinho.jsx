import { useContext, useState } from 'react';

import { DataContext } from '../../Contexts/HookUseContext';

// import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';

import HookAddToCart from '../../hooks/HookAddToCart';

import styles from './Carrinho.module.css';

const Carrinho = () => {

    const {cart} = HookAddToCart();

    return (
        <div
            // className={`${styles.carrinho} ${carrinhoVisivel ? styles.carrinho_ativo : ''}`}
        >
            <div className={styles.carrinho_itens}>
                {/* {itensCarrinho.map((item) =>
                    <CarrinhoItem key={item.id}
                        item={{ ...item }}
                    />
                )} */}
            </div>
            <div className={styles.carrinho_resumo}>
                <h3>Resumo do carrinho</h3>
                <span>Total: 000</span>
            </div>
        </div>
    )
}

export default Carrinho;