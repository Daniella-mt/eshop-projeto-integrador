import { createContext, useContext, useState } from "react";

import axios from "axios";

export const UsuarioContext = createContext();

export const HookUsuarioContext = ({children}) => {
    
    const [usuario, setUsuario] = useState({});

    const consultaUsuario = async () => {
        const usuario = await axios.post('/usuarios',
            {
                body: usuario,
            }
        );
        const response = usuario.data;
    }

    useEffect(() => {
        consultaUsuario();
    }, []);

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )

}

export const useUsuarioContext = () =>{
    return (
        useContext(UsuarioContext)
    )
}
