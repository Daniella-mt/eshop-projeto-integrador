import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";

import useUsuarioCadastro from '../../hooks/HookUsuarioCadatro';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { IoEyeOff } from "react-icons/io5";

import { IoEye } from "react-icons/io5";

import styles from './Cadastro.module.css';

const Cadastro = () => {

  const [hidePassword, setHidePassword] = useState(true);

  const { setUsuario, cadastrarUsuario } = useUsuarioCadastro();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const showPassword = () => {
    setHidePassword(!hidePassword);
  }

  const onSubmit = async (data) => {
    setUsuario({
      nome: data.input_name,
      email: data.email,
      senha: data.password
    });
    cadastrarUsuario();
  }

  return (
    <div className={`
        container-fluid container-sm 
        ${styles.container_sm}
        ` }
    >
      <h2>Criar cadastro</h2>
      <Form
        className={`${styles.custom_form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group
          controlId="input_name"
          className={`${styles.form_group}`}
        >
          <FloatingLabel
            controlId="input_name"
            label="*Nome:"
            className={`${styles.form_floating}`}
          >
            <Form.Control
              type="text"
              placeholder="Nome:"
              className={`${styles.custom_input}`}
              {...register("input_name",
                {
                  required: "Campo nome é obrigatório",
                  maxLength: {
                    value: 30,
                    message: "Este campo deve ter no máximo 30 caracteres"
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/gi,
                    message: "Este campo deve conter apenas letras"
                  }
                }
              )}
            />
            <span className={styles.error}>{errors.input_name?.message}</span>
          </FloatingLabel>
        </Form.Group>
        <Form.Group
          controlId="email"
          className={`${styles.form_group}`}
        >
          <FloatingLabel
            controlId="email"
            label="Email:"
            className={`${styles.form_floating}`}
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className={`${styles.custom_input}`}
              {...register("email", {
                required: 'Campo email é obrigatório',
                minLength: {
                  value: 10,
                  message: 'Este campo deve ter no mínimo 10 caractres.'
                }, maxLength: {
                  value: 30,
                  message: 'Este campo deve ter no máximo 30 caractres.'
                }
              })}
            />
            <span className={styles.error}>{errors.email?.message}</span>
          </FloatingLabel>
        </Form.Group>
        <Form.Group
          controlId="password"
          className={`${styles.form_group}`}
        >
          <FloatingLabel
            controlId="password"
            label="Senha:"
            className={`${styles.form_floating}`}
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
                  },
                  pattern: {
                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&*]).+/,
                    message: 'A sua senha de conter pelo menos  1 letra maiúscula letras minúsculas e pelo menos 1 caracter especial detre estes (@ # $ & *)'
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
            <span className={styles.error}>{errors.password?.message}</span>
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary"
          type="submit"
        >
          Cadastrar
        </Button>
      </Form>
      <p>Já tem conta? <span><Link to={'/login'}>Fazer Login</Link></span></p>
    </div>
  )
}

export default Cadastro
