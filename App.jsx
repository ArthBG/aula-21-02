import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	
	const addTask = () => {
	  if (task.trim().length > 0) {
	    setTasks([...tasks, { id: Math.random().toString(), value: task }]);
	    setTask("");
	  }
	};
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <View style={styles.container}>
    <View style={styles.form}>
      <TextInput
        placeholder="Digite uma nova tarefa"
        style={styles.inputLine}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.taskContainer}>
  {tasks.length === 0 ? (
    <Text style={styles.taskTextRed}>Nenhuma Tarefa Cadastrada</Text>
  ) : (
    <Text style={styles.taskTextGreen}>Tarefas Cadastradas</Text>
  )}
</View>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
    width: '75%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  taskContainer: {
    marginBottom: 20,
  },
  taskTextGreen: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20,
  },
  taskTextRed: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  
});

