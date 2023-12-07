import { Link } from 'react-router-dom';

import HookAddToCart from '../../hooks/HookAddToCart';

import {BsBagPlusFill} from 'react-icons/bs';

import styles from './Card.module.css';

const Card = ({ produto, url }) => {

  const {addTocart, setLocalStorageCart} = HookAddToCart();

  const { image, nome, preco, id } = produto;

  const adProduct = () =>{
    addTocart(produto);
  }

  return (
    <div className={styles.container_card}>
      <button type="button"
        onClick={() => adProduct(produto)}
      >
        <BsBagPlusFill />
      </button>
      <div className={styles.card_img}>
        <img src={image} />
      </div>
      <div className={styles.card_info}>
        <h2>{nome}</h2>
        <span>{preco}</span>
        <Link to={url}>Ver produto</Link>
      </div>
    </div>
  )
}

export default Card;