import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataContext } from '../../hooks/HookUseContext';

import FormComponent from '../../components/FormComponent/FormComponent';
import FieldInput from '../../components/FieldInput/FieldInput';
import FieldText from '../../components/FieldText/FieldText';

import './NovoProduto.module.css';
import { useContext } from 'react';

const NovoProduto = ({ acaoEnviar }) => {

	const navigate = useNavigate();
	
	const { listaProduto, createData } = useContext(DataContext);
	
	const [urlImg, setUrlImg] = useState('');
	const [categoria, setCategoria] = useState('');
	const [nome, setNome] = useState('');
	const [preco, setPreco] = useState('');
	const [descricao, setDescricao] = useState('');

	const novoProduto = (e) => {
		e.preventDefault();
		
		createData(urlImg, categoria, nome, preco, descricao);

		setUrlImg('');
		setCategoria('');
		setNome('');
		setPreco('');
		setDescricao('');

		navigate('/admin');
	}

	return (

		<div>
			<FormComponent
				acaoEnviar={data => novoProduto(data)}
				value={'Adicionar produto'}
			>
				<h2>Adicionar novo produto</h2>
				<FieldInput
					label={'Url da Imagem'}
					id={'urlImg'}
					value={urlImg}
					change={valor => setUrlImg(valor)}
					obrigatorio={true}
				/>
				<FieldInput
					label={'Categoria'}
					id={'categoria'}
					placeholder={'Consoles'}
					change={valor => setCategoria(valor)}
					obrigatorio={true}
				/>
				<FieldInput
					label={'Nome do produto'}
					id={'nome'}
					placeholder={'Produto XYZ'}
					change={valor => setNome(valor)}
					obrigatorio={true}
				/>
				<FieldInput
					id={'preco'}
					placeholder={'R$ 60,00'}
					change={valor => setPreco(valor)}
					obrigatorio={true}
				/>
				<FieldText
					placeholder={'Descrição do produto'}
					change={valor => setDescricao(valor)}
					obrigatorio={true}
				/>
			</FormComponent>
		</div>
	)
}

export default NovoProduto;