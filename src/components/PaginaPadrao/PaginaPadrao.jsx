// import Home from '../../routes/Home/Home.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Banner from '../Banner/Banner.jsx';
import Section from '../Section/Section.jsx';
import Footer from '../Footer/Footer.jsx';
import Carrinho from '../Carrinho/Carrinho.jsx';

import styles from './PaginaPadrao.module.css';

const PaginaPadrao = () => {
  return (
    <div className={styles.pagina_padrao}>
      <NavBar />
      <Banner />
      <Section />
      <Footer />
      <Carrinho />
    </div>
  )
}

export default PaginaPadrao;