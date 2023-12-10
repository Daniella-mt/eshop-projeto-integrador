import { Link, useLocation } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import Pesquisa from '/pesquisa.svg';

import logo from '/cclogo.png';

import styles from './NavBar.module.css';

import BotaoCarrinho from '../BotaoCarrinho/BotaoCarrinho';

import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const urlHome = useLocation();

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <nav className={styles.nav_container}>
            <div className={styles.logo_container}>
                <Link>
                    {isMobile &&
                        <img src={logoMobile} alt="Imagem Mobile" />
                    }
                    {isTablet &&
                        <img src={logoMobile} alt="Imagem Tablet" />
                    }
                    {isDesktop &&
                        <img src={logo} alt="Imagem Desktop" />
                    }
                </Link>
            </div>
            <div className={styles.search_bar}>
                <input type="search" placeholder='O que deseja encontrar?' />
                <img src={Pesquisa} alt="icone lupa para utilizar barra de pesquisa" />
            </div>
            <div className={styles.nav}>
                {urlHome.pathname === '/' &&
                    (

                        <>
                            <div className={styles.menu}>
                                <GiHamburgerMenu />
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
                }
            </div>
        </nav>
    )
}

export default NavBar