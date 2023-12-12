import { useState, useEffect } from "react";

import axios from "axios";

const useUsuarioCadastro = () => {

    const [usuario, setUsuario] = useState({

    });

    const cadastrarUsuario = async () => {
        console.log(usuario);

        try {
            const usuarioPost = await axios.post('https://projetojpsenac.000webhostapp.com/api/dev/usuario',
                {
                    body: usuario,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            const response = usuarioPost.data;

            console.log(response);

            alert('Cadastro realizado com sucesso!');

        } catch (error) {
            console.log('Erro na requisição POST:', error.message, error.response);
            console.log(JSON.stringify(error));
            // console.log({ ...error });

            // debugger;
            // if (error.response) {
            //     console.log(error.response.data);
            //     console.log(error.response.status);
            //     console.log(error.response.headers);
            // }
        }
    }

    return {
        setUsuario,
        cadastrarUsuario
    }

}

export default useUsuarioCadastro;
