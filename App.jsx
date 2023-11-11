/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
      
    </SafeAreaView>
  );
}


export default App;