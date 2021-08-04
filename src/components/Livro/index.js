import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import GlobalContext from '../../context/GlobalContext';
import Api from '../../Api';

export default function Livro(props) {

    const { state } = useContext(GlobalContext);

    // Obter textos das legendas
    let tombo;
    let tombofim;
    let titulo;
    let autor;
    let editora;
    let editarLivro;
    let excluirLivro;
    if (state.legenda) {
        tombo = state.legenda.tombo ?? "";
        tombofim = state.legenda.tombofim ?? "";
        titulo = state.legenda.titulo ?? "";
        autor = state.legenda.autor ?? "";
        editora = state.legenda.editora ?? "";
        editarLivro = state.legenda.editarLivro ?? "";
        excluirLivro = state.legenda.excluirLivro ?? "";
    }

    function Tombo(rotulo, texto) {
        return (
            <>
                <View style={styles.tombo}>
                    <Text style={styles.rotuloTombo}>{rotulo}</Text>
                </View>
                <View style={styles.tombo}>
                    <Text style={styles.campoTombo}>{texto}</Text>
                </View>
            </>
        )
    }

    function Campo(rotulo, texto) {
        return (
            <View style={styles.linha}>
                <Text style={styles.rotulo}>{rotulo}</Text>
                <Text style={styles.campo}>{texto}</Text>
            </View>
        )
    }

    function confirmarExcluir(livro) {
        Alert.alert('Confirmação', 'Deseja excluir o livro?', [
            {
                text: 'Sim',
                onPress() {
                    Api.excluirItemColecao('livros', livro);
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                {Tombo(tombo, props.livro.tombo)}
                {Tombo(tombofim, props.livro.tombofim)}
            </View>
            {Campo(titulo, props.livro.titulo)}
            {Campo(autor, props.livro.autor)}
            {Campo(editora, props.livro.editora)}
            <View style={styles.acoes}>
                <TouchableOpacity
                    onPress={() => alert('Editar')}
                >
                    <View style={styles.botaoEditar}>
                        <Text style={styles.textoBotao}>{editarLivro}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => confirmarExcluir(props.livro)}
                >
                    <View style={styles.botaoExcluir}>
                        <Text style={styles.textoBotao}>{excluirLivro}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}
