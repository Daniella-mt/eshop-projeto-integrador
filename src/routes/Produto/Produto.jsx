import { useState, useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

import { DataContext } from "../../Contexts/HookUseContext";

import { RotatingLines } from 'react-loader-spinner';

import Card from '../../components/Card/Card';

import styles from './Produto.module.css';

const Produto = () => {

  const { id } = useParams();

  const [produto, setProduto] = useState({});

  const [similares, setSimilares] = useState([]);

  const { listaProdutos } = useContext(DataContext);

  useEffect(() => {
    const produtoUnico = listaProdutos.find((produto) => produto.id === id);
    setProduto(produtoUnico);
  }, [listaProdutos, id]);

  useEffect(() => {
    if (produto) {
      const prodSimilares = listaProdutos.filter((similar) =>
        (similar.section === produto.section && similar.id !== produto.id)
      );
      setSimilares(prodSimilares);
    }
  }, [listaProdutos, produto]);

  return (
    <>
      {!produto
        ?
        (
          <div className={styles.loading}>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="3"
              animationDuration="0.75"
              width="90"
              visible={true}
            />
            <p>Carregando...</p>
          </div>
        )
        :
        (
          <div className={styles.container}>
            <div className={styles.produto_container}>
              <div className={styles.img_produto}>
                <img src={produto.img} alt="" />
              </div>
              <div className={styles.info_produto}>
                <h2>{produto.nome}</h2>
                <span>{produto.preco}</span>
                <p>{produto.descricao}</p>
              </div>
            </div>
            <div className={styles.similares_container}>
              <h2>Produtos similares</h2>
              <div className={styles.similares}>
                {
                  similares &&
                  similares.map((prod) =>
                    <Card
                      url={`/produtos/ALL/${prod.id}/info`}
                      key={prod.id}
                      produto={{ ...prod }} />
                  )
                  ||

                  <p>Não encontramos produtos de categoria semelhante</p>
                }
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Produto;