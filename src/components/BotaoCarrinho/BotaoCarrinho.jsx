import { useContext } from 'react';

import { DataContext } from '../../hooks/HookUseContext';

import { PiHandbagDuotone } from 'react-icons/pi';

import styles from './BotaoCarrinho.module.css';

const BotaoCarrinho = () => {
    const {itensCarrinho, carrinhoVisivel, setCarrinhoVisivel} = useContext(DataContext);
    
    return (
        <div className={styles.btn_carro}>
            <button type="button"
                onClick={() => setCarrinhoVisivel(!carrinhoVisivel)}
            >
                <PiHandbagDuotone />
            </button>
            {itensCarrinho.lenth > 0 && <span>{itensCarrinho.length}</span>}
        </div>
    )
}

export default BotaoCarrinho;