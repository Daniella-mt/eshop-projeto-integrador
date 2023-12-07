import { useContext, useEffect, useState } from "react";

import { DataContext } from "../../Contexts/HookUseContext";

import { BsFillBagXFill } from "react-icons/bs";

import { IoIosRemoveCircle } from "react-icons/io";

import { IoMdAddCircle } from "react-icons/io";

import styles from './CarrinhoItem.module.css';

const CarrinhoItem = ({ item }) => {

    const { itensCarrinho, setItensCarrinho } = useContext(DataContext);

    const [itemCarrinho, setItemCarrinho] = useState({});

    const { img, nome, preco, id } = item;

    const [qtd, setQtd] = useState(1);

    const addQtd = () => {
        setQtd(prevQtd => prevQtd + 1);
    }

    const subQtd = () => {
        if (qtd > 1) {
            setQtd(prevQtd => prevQtd - 1);
        } else {
            return
        }
    }

    const removeItem = (id) => {
        const itensCarrinhoAtualizado = itensCarrinho.filter((item) =>
            item.id !== id
        );
        setItensCarrinho(itensCarrinhoAtualizado);
    }

    return (
        <div className={styles.carrinho_container}>
            <div className={styles.img_item}>
                <img src={img} alt="imagem do item" />
            </div>
            <div className={styles.item_info}>
                <h2>{nome}</h2>
                <span>{preco}</span>
                <div>
                    <button
                        type="button"
                        onClick={() => addQtd()}
                    >
                        <IoMdAddCircle />
                    </button>
                    <span>{qtd}</span>
                    <button
                        type="button"
                        onClick={() => subQtd()}
                    >
                        <IoIosRemoveCircle />
                    </button>
                </div>
            </div>

            <button
                type="button"
                onClick={() => removeItem(id)}
            >
                <BsFillBagXFill />
            </button>
        </div>
    )
}

export default CarrinhoItem;