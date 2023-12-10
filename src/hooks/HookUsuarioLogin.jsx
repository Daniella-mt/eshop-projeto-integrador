import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const HookUsuarioLogin = () => {
    const [useuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        try {
            const loginUsuario = await axios.post('https://projetojpsenac.000webhostapp.com/api/dev/usuario/ALL',
                {
                    body: {
                        useuario,
                        senha
                    }
                }
            )
            const response = loginUsuario.data;

            console.log(response);

            navigate('/admin');
        }

        catch (error) {
            console.log('Erro na requisição POST:', error.message, error.response);
        }
    }

    return {
        setUsuario,
        setSenha,
        login
    }
}

export default HookUsuarioLogin;
