import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements'
import Livros from './views/Livros';
import LivroForm from './views/Livros/LivroForm';
import GlobalContext from './context/GlobalContext';

const Stack = createStackNavigator()

export default function Routers() {

    const { state } = useContext(GlobalContext);

    // Obter textos das legendas
    let livrosTituloLista;
    let adicionarLivro;
    let editarLivro;
    let excluirLivro;
    if (state.legenda) {
        livrosTituloLista = state.legenda.livrosTituloLista ?? "";
        adicionarLivro = state.legenda.adicionarLivro ?? "";
        editarLivro = state.legenda.editarLivro ?? "";
        excluirLivro = state.legenda.excluirLivro ?? "";
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="Livros"
                    component={Livros}
                    options={({ navigation }) => {
                        return {
                            title: `${livrosTituloLista}`,
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("LivroAdicionar")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="LivroAdicionar"
                    component={LivroForm}
                    options={{
                        title: `${adicionarLivro}`
                    }}
                />
                <Stack.Screen
                    name="LivroEditar"
                    component={LivroForm}
                    options={{
                        title: `${editarLivro}`
                    }}
                />
                <Stack.Screen
                    name="LivroExcluir"
                    component={LivroForm}
                    options={{
                        title: `${excluirLivro}`
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#274fa8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}