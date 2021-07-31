import React, { useContext, useEffect } from 'react';
//import { Text } from 'react-native';
//import Livros from './views/Livros';
import Login from './views/Login';
import Routers from './Routers';
import { recuperarUsuario } from './context/UsuarioActions'
import { carregarLegendas } from './context/SistemaActions'
import GlobalContext from './context/GlobalContext'


export default function LoginOuAplicacao() {

    const { dispatch, state } = useContext(GlobalContext);

    useEffect(async () => {
        recuperarUsuario(dispatch);
        await carregarLegendas(dispatch, "portugues");
    }, [dispatch, state.legenda]);
    
    let usuario = state.usuario ? state.usuario : {};
    usuario.nome = "Marcos";
    //console.warn(usuario);
    
    if (usuario && usuario.nome) {
        return <Routers />
    } else {
        return <Login />
    }

}