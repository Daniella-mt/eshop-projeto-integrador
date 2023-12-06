import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({ produto, url }) => {

  const { image, nome, preco } = produto;
  // const newPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
  //   price,
  // )

  return (
    <div className={styles.container_card}>
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