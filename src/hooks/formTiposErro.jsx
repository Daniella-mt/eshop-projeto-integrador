export const mensagens = {
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
    }
}

export const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];


