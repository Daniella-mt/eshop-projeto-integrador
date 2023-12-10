import Banner from '../Banner/Banner.jsx';
import Section from '../Section/Section.jsx';
import Carrinho from '../Carrinho/Carrinho.jsx';

import styles from './PaginaPadrao.module.css';

const PaginaPadrao = () => {
  return (
    <>
      <div className={styles.pagina_padrao}>
      <Banner />
        <Section />
        <Carrinho />
        </div>
    </>
  )
}

export default PaginaPadrao;