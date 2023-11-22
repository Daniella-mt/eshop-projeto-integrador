const FormataPreco = (preco, moeda) => {
  return preco.toLocaleString('pt-br',
    {
      style: 'currency',
      moeda
    })
}

export default FormataPreco;