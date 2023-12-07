import { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import FieldInput from '../../components/FieldInput/FieldInput';

import { DataContext } from '../../Contexts/HookUseContext';

import styles from './Login.module.css';

const Login = () => {

    const { usuario, setUsuario } = useContext(DataContext);

    const [userName, setUserName] = useState('');
    const [email, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submitou!');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Iniciar sessão</h2>
                <FieldInput
                    id={'user'}
                    name={'email'}
                    placeholder={'Escreva seu email'}
                    type={'email'}
                    valor={userName || ''}
                    change={valor => setUserName(valor)}
                    obrigatorio
                    minLength={15}
                    pattern={/^[A-Z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/gi}
                />
                <FieldInput
                    placeholder={'Escreva sua senha'}
                    id={'password'}
                    name={'password'}
                    type={'password'}
                    valor={email || ''}
                    change={valor => setPassword(valor)}
                    obrigatorio
                    minLength={8}
                    pattern={/"^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"/}
                />

                <input type="submit" value={'Enviar'} />
                <Link to={'/admin'}>
                    Entrar
                </Link>
            </form>
        </div>
    )
}

export default Login;