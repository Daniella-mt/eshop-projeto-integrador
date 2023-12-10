import { useState, useEffect } from "react";

import axios from "axios";

const useUsuarioCadastro = () => {

    const [usuario, setUsuario] = useState({

    });

    const cadastrarUsuario = async () => {
        console.log(usuario);
        
        try {
            const usuarioPost = await axios.post('https://projetojpsenac.000webhostapp.com/api/dev/usuario/ALL',
                {
                    body: usuario,
                }
            );
            const response = usuarioPost.data;

            console.log(response);

            alert('Cadastro realizado com sucesso!');

        } catch (error) {
            console.error('Erro na requisição POST:', error.message, error.response);
        }
    }

    return {
        setUsuario,
        cadastrarUsuario
    }

}

export default useUsuarioCadastro;
