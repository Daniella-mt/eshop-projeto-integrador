import { useContext } from 'react';

import { DataContext } from '../../hooks/HookUseContext';

import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';

import styles from './Carrinho.module.css';

const Carrinho = () => {

    const { itensCarrinho, carrinhoVisivel } = useContext(DataContext);

    return (
        <div className={`${styles.carrinho} ${carrinhoVisivel ? styles.carrinho_ativo : ''}`}>
            <div className={styles.carrinho_itens}>
                {itensCarrinho.map((item) =>
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