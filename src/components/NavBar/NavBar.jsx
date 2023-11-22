import { Link, useLocation } from 'react-router-dom';

import LogoJoystick from '/sports.svg';
import LogoTitulo from '/Texto.svg';
import Pesquisa from '/pesquisa.svg';

import styles from './NavBar.module.css';
import BotaoCarrinho from '../BotaoCarrinho/BotaoCarrinho';
import BotaoPerfil from '../BotaoPerfil/BotaoPerfil';

const NavBar = () => {
    const urlHome = useLocation();
    return (
        <nav className={styles.nav_container}>
            <div className={styles.logo_container}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <img src={''} alt="Logo e-shop" />
                    </Link>
                    <Link to={'/'}>
                        <img src={''} alt="Logo" />
                    </Link>
                </div>
                <div className={styles.search_bar}>
                    <input type="search" placeholder='O que deseja encontrar?' />
                    <img src={Pesquisa} alt="icone lupa para utilizar barra de pesquisa" />
                </div>
            </div>
            <div className={styles.nav}>
                {urlHome.pathname === '/' &&
                    (

                        <>
                            <div className={styles.login}>
                                <Link to={'/login'}>
                                    Login
                                </Link>

                            </div>
                            <BotaoCarrinho />
                        </>

                    )
                    ||
                    urlHome.pathname === '/novo-produto' &&
                    (
                        <div className={styles.login} >
                            <Link to={'/admin'}>
                                Menu Administrador
                            </Link>
                        </div>
                    )
                    // ||
                    // urlHome.pathname === '/usuario-logado' &&
                    // (
                    //     <>
                    //         <BotaoPerfil/>
                    //         <BotaoCarrinho/>
                    //     </>
                    // )
                }
            </div>
        </nav>
    )
}

export default NavBar