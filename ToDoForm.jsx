import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ task, setTask, addTask }) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ToDoForm;
