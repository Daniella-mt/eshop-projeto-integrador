import { useState, useEffect, useContext } from 'react';

import { useParams, useNavigate, Link } from 'react-router-dom';

import { DataContext } from '../../hooks/HookUseContext.jsx';

import FieldInput from '../../components/FieldInput/FieldInput.jsx';
import FieldText from '../../components/FieldText/FieldText.jsx';

import styles from './AtualizarProduto.module.css';

const AtualizarProduto = () => {

    const [produtoEditar, setProdutoEditar] = useState({});

    const { listaProdutos, updateData } = useContext(DataContext);

    const { id } = useParams();

    const [img, setImg] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const produtoCerto = listaProdutos.find((produto) =>
            produto.id === Number(id)
        );
        if (produtoCerto) {
            setImg(produtoCerto.img);
            setNome(produtoCerto.nome);
            setPreco(produtoCerto.preco);
            setCategoria(produtoCerto.section);
            setDescricao(produtoCerto.descricao);

            setProdutoEditar(produtoCerto);
        }

    }, [listaProdutos, id]);

    const handlingSubmit = (e) => {
        e.preventDefault();

        // navigate('/admin');
    }

    return (
        <div className={styles.form_container}>
            <form>
                <h2>Atualizar produto: </h2>
                <FieldInput
                    label={'Url da Imagem'}
                    id={'imagem'}
                    name={'url'}
                    valor={img || ''}
                    change={valor => setImg(valor)}
                    obrigatorio
                    minLength={5}
                />
                <FieldInput
                    label={'Categoria'}
                    id={'categoria'}
                    name={'categoria'}
                    placeholder={'Consoles'}
                    valor={categoria || ''}
                    change={valor => setCategoria(valor)}
                    obrigatorio
                    minLength={3}
                />
                <FieldInput
                    label={'Nome do produto'}
                    id={'nome'}
                    name={'nome'}
                    placeholder={'Produto XYZ'}
                    valor={nome || ''}
                    change={valor => setNome(valor)}
                    obrigatorio
                    minLength={3}
                />
                <FieldInput
                    label={'Preço do produto'}
                    id={'preco'}
                    name={'preco'}
                    type={'number'}
                    placeholder={'60,00'}
                    valor={preco || ''}
                    change={valor => setPreco(valor)}
                    obrigatorio
                    minLength={4}
                    pattern={"^\d{1,2}([.,]\d{1,2})?$"}
                />
                <FieldText
                    placeholder={'Descrição do produto'}
                    name={'descricao'}
                    valor={descricao || ''}
                    change={valor => setDescricao(valor)}
                    obrigatorio
                />
                <input type="submit" value={'Enviar'} />
                <Link to={'/admin'}>
                    enviar
                </Link>
            </form>
        </div>
    )
}

export default AtualizarProduto