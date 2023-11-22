import styles from './BotaoPerfil.module.css';

import { MdPersonPin } from 'react-icons/md';

const BotaoPerfil = () => {
    return (
        <div className={styles.btn_perfil}>
            <button type="button">
                <MdPersonPin />
            </button>
            <span>Conta</span>
        </div>
    )
}

export default BotaoPerfil;