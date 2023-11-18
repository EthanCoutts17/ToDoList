/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  
  const addTask = (task) => {
   
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      {}
      <ToDoForm addTask={addTask} />
      {}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

export default App;