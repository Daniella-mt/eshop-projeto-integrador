import { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import HookUsuarioLogin from '../../hooks/HookUsuarioLogin';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { IoEyeOff } from "react-icons/io5";

import { IoEye } from "react-icons/io5";

import styles from './Login.module.css';

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    const { setUsuario, setSenha, login } = HookUsuarioLogin();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const showPassword = () => {
        setHidePassword(!hidePassword);
    }

    const onSubmit = (data) => {
        setUsuario({
            email: data.email,
            senha: data.password
        });
        cadastrarUsuario();
    }

    return (
        <div className={`
        container-fluid container-sm 
        ${styles.container_sm}
        ` }>
            <h2>Fazer Login</h2>
            <Form
                className={`${styles.custom_form}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group controlId="email"
                    className={`${styles.form_group}`}
                >
                    <FloatingLabel
                        controlId="email"
                        label="Email"
                        className={`${styles.form_floating}`}
                    >
                        <Form.Control type="email"
                            placeholder="name@example.com"
                            className={`${styles.input_email}`}
                            {...register("email",
                                {
                                    required: "Campo nome é obrigatório",
                                    minLength: {
                                        value: 10,
                                        message: 'Este campo deve ter no mínimo 10 caractres.'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Este campo deve ter no máximo 30 caracteres"
                                    }
                                }
                            )}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group
                    className={`${styles.form_group}`} controlId="password"
                >
                    <FloatingLabel
                        controlId="password"
                        label="Senha:"
                        className={`${styles.input_password}`}
                    >
                        <Form.Control
                            type={`${hidePassword ? 'password' : 'text'}`}
                            placeholder="Sua senha"
                            className={`${styles.custom_input}`}
                            {...register("password",
                                {
                                    required: 'Campo senha é obrigatório',
                                    minLength: {
                                        value: 8,
                                        message: 'Campo senha deve ter no mínimo 8 caracteres.'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: `Campo senha deve ter no máximo 12 caracteres.`
                                    }
                                })}
                        />
                        <button
                            type="button"
                            className={styles.hidePassword}
                            onClick={showPassword}
                        >
                            {hidePassword ? <IoEyeOff /> : <IoEye />}

                        </button>
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
            <p>
                Não tem conta? <span><Link to={'/cadastro'}> Cadastre-se
                </Link></span>
            </p>
        </div>
    )
}

export default Login;