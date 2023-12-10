import { useEffect, useState } from "react";

const HookUseCart = () => {
    const [cart, setCart] = useState(
        () => {
            const carrinhoSalvo =
                localStorage.getItem('cart');
            return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
        }
    );

    const addToCart = (newItem) => {
        cart.find(item => {
            item.id === newItem.id
                ?
                setCart([
                    {
                        ...item,
                        qtd: item.qtd + 1
                    }
                ])
                :
                setCart(prevState =>
                    [
                        ...prevState,
                        {
                            ...newItem,
                            qtd: 1
                        }
                    ]
                )
        });




    }

    const setLocalStorageCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const getLocalStorage = () => {
        const cart = localStorage.getItem('cart');

        const parsedCart = JSON.parse(cart);

        return parsedCart;
    }

    useEffect(() => {
        setLocalStorageCart();
    }, [cart]);

    return {
        cart,
        setCart,
        addToCart,
        setLocalStorageCart,
        getLocalStorage
    }

}

export default HookUseCart;
