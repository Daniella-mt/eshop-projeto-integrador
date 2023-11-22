import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { DataContext } from '../../hooks/HookUseContext';

import Card from '../../components/Card/Card';

import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import styles from './Admin.module.css';

const Admin = () => {
    const { listaProdutos, deleteData } = useContext(DataContext);
    
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2 >
                    Todos os produtos
                </h2>
                <div>
                    <Link to={'/novo-produto'}>
                        Adicionar produto
                    </Link>
                </div>
            </div>
            <div className={styles.produto}>
                {listaProdutos.map((produto) =>
                    <div key={produto.id} className={styles.card_container}>
                        <div className={styles.actions}>
                            <Link to={`/produtos/edit-produto/${produto.id}`}>
                                <BsPencilSquare />
                            </Link>
                            <RiDeleteBin2Fill onClick={evento => deleteData(produto.id)}/>
                        </div>
                        <Card
                            key={produto.id}
                            url={`/produtos/${produto.id}/info`}
                            produto={{ ...produto }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Admin