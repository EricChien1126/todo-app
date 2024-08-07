import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  task: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default ToDoList;
