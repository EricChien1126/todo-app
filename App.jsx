import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm task={task} setTask={setTask} addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
