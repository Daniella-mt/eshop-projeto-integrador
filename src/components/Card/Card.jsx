import { Link } from 'react-router-dom';

import HookAddToCart from '../../hooks/HookAddToCart';

import { BsBagPlusFill } from 'react-icons/bs';

import styles from './Card.module.css';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

const CardItem = ({ produto, url }) => {

  const { addToCart } = HookAddToCart();

  const { image, nome, preco, id } = produto;

  const adProduct = () => {
    addToCart(produto);
  }

  return (
    <Card className={styles.container_card}>
      <Card.Img variant="top" src={image} />
      <Button variant="link">
        <BsBagPlusFill />
      </Button>
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>{preco}</Card.Text>
        <Link to={url}>
          <Button variant="primary">Ver produto</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardItem;
{/* <div className={styles.container_card}>

      <button type="button"
        onClick={() => adProduct(produto)}
      >
        <BsBagPlusFill />
      </button>
      <div className={styles.card_img}>
        <div>
          <img src={image} />
        </div>
        <div className={styles.card_info}>
          <div>
            <h2>{nome}</h2>
            <span>{preco}</span>
            <Link to={url}>Ver produto</Link>
          </div>
        </div>
      </div>
    </div> */}