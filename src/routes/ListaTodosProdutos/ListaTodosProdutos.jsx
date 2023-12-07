import { useContext } from "react";

import { useParams } from "react-router-dom";

import { DataContext } from "../../Contexts/HookUseContext";

import Card from "../../components/Card/Card";

import styles from './ListaTodosProdutos.module.css';

const ListaTodosProdutos = () => {
    const section = useParams();

    const { listaProdutos } = useContext(DataContext);

    const tudoCategoria = listaProdutos.filter((produto) =>
        produto.section === section.section
    )

    return (
        <div className={styles.container_tudo_categoria}>
            <div className={styles.titulo}>
                <h1>Tudo em <span>{section.section}</span></h1>
            </div>
            <div className={styles.all_list}>
                {
                    tudoCategoria.map((item) =>
                        <Card
                            key={item.id}
                            url={`/produtos/ALL/${item.id}/info`}
                            produto={{ ...item }}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ListaTodosProdutos