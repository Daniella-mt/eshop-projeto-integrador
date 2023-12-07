import { useEffect, useState } from "react";

const HookUseCart = () => {
    const [cart, setCart] = useState(
        () => {
            const carrinhoSalvo =
                localStorage.getItem('cart');
            return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
        }
    );

    const addTocart = (newItem) => {
        setCart(prevState => {
            return [
                ...prevState,
                { ...newItem, qtd: 1 }
            ]
        });
    }

    const setLocalStorageCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const getLocalStorage = () => {
        const cart = localStorage.getItem('cart');
        console.log(cart);
        const parsedCart = JSON.parse(cart);
        return parsedCart;
    }

    useEffect(() => {
        setLocalStorageCart();
    }, [cart]);

    return {
        cart,
        addTocart,
        setLocalStorageCart,
        getLocalStorage
    }
}

export default HookUseCart;
