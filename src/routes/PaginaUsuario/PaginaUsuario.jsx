import { useState } from 'react';


import FieldText from '../../components/FieldText/FieldText';

import styles from './PaginaUsuario.module.css';

const PaginaUsuario = () => {

  return (
    <div className={styles.perfil_container}>
      <div className={styles.usuario_opcoes}>

        <div className={styles.usuario_avatar}>
          <img src="" alt="avatar do usuario" />
          <h3>Hello,</h3><span> Usuario</span>
        </div>

        <div className={styles.opcoes_conta}>

        </div>
      </div>
      <div className={styles.info_form_edit}>
      
      </div>
    </div>
  )
}

export default PaginaUsuario