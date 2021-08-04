import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
//import GlobalContext from '../../context/GlobalContext';
//import { listarLivros } from '../../context/LivroActions';
import Api from '../../Api'
import Livro from '../../components/Livro';

export default function ListaLivros() {

    //const { dispatch, state } = useContext(GlobalContext);
    const [livros, setLivros] = useState([])

    // useEffect(() => {
    //     if (!state.estaSalvandoLivro) {
    //         listarLivros(dispatch);
    //     }
    // }, [state.estaSalvandoLivro, dispatch]);

    useEffect(() => {
        Api.listarColecao('livros', setLivros);
    }, [])

    //console.log('Livros: ', livros);

    function renderizarItens({ item }) {
        return (
            <Livro 
                livro={item}
            />
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                data={livros}
                renderItem={renderizarItens}
            />

            {/* <Livro 
                livro={{"ativo": true, "autor": "Rogério Andrade Barbosa", "editora": "Cortez", "id": "CMnuxYx17CbXGVT2kwMq", "titulo": "Madiba - O menino africano", "tombo": 4525, "tombofim": 4549}}
            /> */}
        </View>
    )
}