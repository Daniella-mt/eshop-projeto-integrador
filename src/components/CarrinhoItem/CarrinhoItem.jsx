import { useContext, useState } from "react";

import { DataContext } from "../../Contexts/HookUseContext";

import HookUseCart from "../../hooks/HookAddToCart";

import { BsFillBagXFill } from "react-icons/bs";

import { IoIosRemoveCircle } from "react-icons/io";

import { IoMdAddCircle } from "react-icons/io";

import styles from './CarrinhoItem.module.css';

const CarrinhoItem = ({ item }) => {

    const { itensCarrinho, setItensCarrinho } = useContext(DataContext);

    const [itemCarrinho, setItemCarrinho] = useState({});

    const { cart, setCart } = HookUseCart();

    const { img, nome, preco, id, qtd } = item;

    const removeItem = (id) => {
        setCart(
            cart.filter((item =>
                item.id !== id
            ))
        )
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
                    >
                        <IoMdAddCircle />
                    </button>
                    <span>{qtd}</span>
                    <button
                        type="button"
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