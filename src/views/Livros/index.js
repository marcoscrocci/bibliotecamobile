import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import GlobalContext from '../../context/GlobalContext';
import { listarLivros } from '../../context/LivroActions';

export default function ListaLivros() {

    const { dispatch, state } = useContext(GlobalContext);

    useEffect(() => {
        if (!state.estaSalvandoLivro) {
            listarLivros(dispatch);
        }
    }, [state.estaSalvandoLivro, dispatch]);


    return (
        <Text>Livros</Text>
    )
}