import React, { useContext, useEffect } from 'react';
//import { Text } from 'react-native';
import Livros from './views/Livros';
import Login from './views/Login';
import { recuperarUsuario } from './context/UsuarioActions'
import { carregarLegendas } from './context/SistemaActions'
import GlobalContext from './context/GlobalContext'


export default props => {

    const { dispatch, state } = useContext(GlobalContext);

    useEffect(() => {
        recuperarUsuario(dispatch);
        carregarLegendas(dispatch, "portugues");
    }, [dispatch]);
    
    let usuario = state.usuario ? state.usuario : {};
    //usuario.nome = "Marcos";
    //console.warn(usuario);
    
    if (usuario && usuario.nome) {
        return <Livros />
    } else {
        return <Login />
    }

}