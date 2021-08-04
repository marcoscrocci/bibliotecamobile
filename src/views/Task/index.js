import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
//import database from '../../config/firebase.js';
//import {FontAwesome} from 'react-native-vector-icons';
import { ListItem, Button, Icon } from 'react-native-elements'
import Api from '../../Api'
import styles from './style';

export default function Task({navigation}) {
  const [tasks, setTasks] = useState([]);
  const [tarefas, setTarefas] = useState([]);

  function deleteTask(id) {
    database.collection('Tasks').doc(id).delete();
  }

  useEffect(() => {

    Api.listarLivros(setTasks);

    // database.collection('livros').onSnapshot(query => {
    //   const list = [];
    //   query.forEach(doc => {
    //     list.push({...doc.data(), id: doc.id});
    //   });
    //   setTasks(list);
    //   console.log('Lista:', list);
    // });
   
    // const lista = [];
    // const item = { description: "Estudar JavaScript 2", id: "4n501LxY2CcfRYUdL4an", status: "false" };
    // lista.push(item);
    // //console.log(lista);

    // //setTask(list);
    // setTarefas(lista);
    // console.log('tarefas: ', tarefas);
  }, []);

  function renderizarItens() {
    return tasks.map((item) => {
      return (
        <Text>{item.description}</Text>
      )
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({item}) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}>
                {/* <FontAwesome
                  name="star"
                  size={23}
                  color="#F92e6A"></FontAwesome> */}
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate('Details', {
                    id: item.id,
                    description: item.description,
                  })
                }>
                {item.titulo}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate('New Task')}>
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
