import { Link } from 'react-router-dom';

import styles from './FormComponent.module.css';

const FormComponent = ({ children, value, acaoEnviar }) => {
  
  return (
    <div className={styles.form_container}>
      <form onSubmit={acaoEnviar}>
        {children}
        <input type="submit" value={value} />
        <Link to={'/admin'}>
          {value}
        </Link>
      </form>
    </div>
  )
}

export default FormComponent;