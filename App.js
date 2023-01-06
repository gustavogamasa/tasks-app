import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'
import Task from './src/Task';

export default function App() {

  const [newTaskName, setNewTaskName] = useState('');
  const [taskList, setTaskList] = useState([]);


  function handleAdd() {
    if (newTaskName === '') { return; }

    let data = {
      key: Date.now(),
      item: newTaskName
    }

    setTaskList(oldArray => [data, ...oldArray]);
    setNewTaskName('');

  }

  function handleDelete(item) {
    let updateList = taskList.filter((task)=>{
      return (task.item !== item)
    });
    setTaskList(updateList);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>

      <View style={styles.containerInput}>
        <TextInput placeholder="New task"
          style={styles.input}
          value={newTaskName}
          onChangeText={(text) => { setNewTaskName(text) }}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <FontAwesome name='plus' size={20} color='#FFF' />
        </TouchableOpacity>
      </View>

      <FlatList style={styles.list} data={taskList}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Task data={item}
          deleteItem={() => { handleDelete(item.item) }} />}>
      </FlatList>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 35,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginTop: 28,
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12


  },

  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },

  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 14
  },

  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: "#73f7ff",
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },

  list: {
    flex: 1,
    backgroundColor: 'white',
    paddingStart: '4%',
    paddingEnd: '4%'
  }
})