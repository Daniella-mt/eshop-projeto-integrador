import { useState } from 'react';

import styles from './FieldInput.module.css'

const FieldInput = ({ type = 'text', placeholder, label, id, name, change, valor, obrigatorio = false, minLength, pattern }) => {

	const [mensagem, setMensagem] = useState('');

	const mensagens = {
		url: {
			valueMissing: "O campo de url não pode estar vazio.",
			patternMismatch: "Por favor, preencha um url válido.",
			tooShort: "O campo de url não tem caractéres suficientes."
		},
		nome: {
			valueMissing: "O campo de nome não pode estar vazio.",
			typeMismatch: "Por favor, o campo nome deve ter somente letras.",
			tooShort: "Por favor, informe um nome válido."
		},
		categoria: {
			valueMissing: "O campo de categoria não pode estar vazio.",
			patternMismatch: "Por favor, informe somente letras.",
			tooShort: "O campo categoria não tem caractéres suficientes."
		},
		preco: {
			valueMissing: 'O campo de preco não pode estar vazio.',
			customError: "Informe somente números.",
			tooShort: "O campo de preço não tem caractéres suficientes."
		},
		descricao: {
			valueMissing: 'O campo descrição não pode estar vazio.',
			customError: 'O texto de descrição precisa ter pelo menos 10 caracteres.'
		},
		email: {
			valueMissing: 'O campo email não pode estar vazio.',
			patternMismatch: 'email inválido',
			customError: 'Digite um email válido.'
		},
		password: {
			valueMissing: 'Campo senha inválido.',
			customError: 'O texto de senha precisa ter pelo menos 8 caracteres.'
		}
		
	}

	const tiposDeErro = [
		'valueMissing',
		'typeMismatch',
		'patternMismatch',
		'tooShort',
		'customError'
	];

	const aoDigitar = (e) => {
		change(e.target.value);
	}

	const checkValidity = (e) => {
		tiposDeErro.forEach((erro) =>{
			if(e.target.validity[erro]){
				setMensagem(mensagens[e.target.name][erro]);
			} 
		})
	}

	return (

		<div className={styles.form_control}>
			<label htmlFor={name}>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={id}
				value={valor}
				placeholder={placeholder}
				onChange={aoDigitar}
				required={obrigatorio}
				onBlur={checkValidity}
				minLength={minLength}
				pattern={pattern}
			/>
			<span className={styles.error}>{mensagem}</span>
		</div>
	)
}

export default FieldInput;