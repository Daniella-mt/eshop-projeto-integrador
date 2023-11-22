import * as Yup from 'yup';

export const ProdutoSchema = Yup.object().shape({
    url: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    categoria: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    nome: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    preco: Yup.number()
        .min(3, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
    descricao: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});