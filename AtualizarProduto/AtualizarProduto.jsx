import { useState, useEffect, useContext } from 'react';

import { useParams, useNavigate, Link } from 'react-router-dom';

import { ProdutosContext } from '../../hooks/HookUseContext.jsx';

import FieldInput from '../../components/FieldInput/FieldInput.jsx';
import FieldText from '../../components/FieldText/FieldText.jsx';
// import FormComponent from '../../components/FormComponent/FormComponent.jsx';

import styles from './AtualizarProduto.module.css';

const AtualizarProduto = () => {

    const { listaProdutos, updateData } = useContext(ProdutosContext);

    const { id } = useParams();

    // const navigate = useNavigate();

    // const [urlImg, setUrlImg] = useState('');
    // const [categoria, setCategoria] = useState('');
    // const [nome, setNome] = useState('');
    // const [preco, setPreco] = useState('');
    // const [descricao, setDescricao] = useState('');

    useEffect(() => {
        const produtoEditar = listaProdutos.find((produto) =>
            produto.id === Number(id)
        );
        // if (produtoEditar) {
        //     setUrlImg(produtoEditar.img);
        //     setCategoria(produtoEditar.section);
        //     setNome(produtoEditar.nome);
        //     setPreco(produtoEditar.preco);
        //     setDescricao(produtoEditar.descricao);
        // }
    }, [listaProdutos, id]);

    const atualizarProduto = (data) => {
        ;

        console.log(data);
        // if (urlImg, categoria, nome, preco, descricao, id) {
        //     updateData(urlImg, categoria, nome, preco, descricao, id);

        // setUrlImg('');
        // setCategoria('');
        // setNome('');
        // setPreco('');
        // setDescricao('');

        // }
        // navigate('/admin');
    }

    return (
        <div className={styles.form_container}>
            {/* <FormComponent value={'Adicionar produto'} acaoEnviar={produto => onSubmit(atualizarProduto(produto))}
            > */}
            <form onSubmit={atualizarProduto}>
                <h2>Atualizar produto: </h2>
                <FieldInput
                    label={'Url da Imagem'}
                    id={'imagem'}
                    name={'image'}
                // valor={urlImg || ''}
                // change={valor => setUrlImg(valor)}
                // obrigatorio={true}
                />
                <FieldInput
                    label={'Categoria'}
                    id={'categoria'}
                    placeholder={'Consoles'}
                // valor={categoria || ''}
                // change={valor => setCategoria(valor)}
                // obrigatorio={true}
                />
                <FieldInput
                    label={'Nome do produto'}
                    id={'nome'}
                    placeholder={'Produto XYZ'}
                // valor={nome || ''}
                // change={valor => setNome(valor)}
                // obrigatorio={true}
                />
                <FieldInput
                    label={'Preço do produto'}
                    id={'preco'}
                    placeholder={'R$ 60,00'}
                // valor={preco || ''}
                // change={valor => setPreco(valor)}
                // obrigatorio={true}
                />
                <FieldText
                    placeholder={'Descrição do produto'}
                // valor={descricao || ''}
                // change={valor => setDescricao(valor)}
                // obrigatorio={true}
                />
                {/* </FormComponent> */}
                <input type="submit" value={'Enviar'} />
                <Link to={'/admin'}>
                    enviar
                </Link>
            </form>
        </div>
    )
}

export default AtualizarProduto