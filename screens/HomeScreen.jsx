import React from "react";
import MainLayout from '../layouts/MainLayout';
import { useState } from 'react';
import {SafeAreaView,Button  } from 'react-native';

import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";

function HomeScreen({navigation}){

                        const [tasks, setTasks] = useState([
                                                'Do laundry',
                                                'Go to gym',
                                                'Walk dog'
                                              ]);
                                            
                                              
                                              const addTask = (task) => {
                                               
                                                setTasks([...tasks, task]);
                                              };

                        return(
                                                <>
                                                  <MainLayout>
                                                                        <SafeAreaView>
                                                                        {}
                                                                        <ToDoForm addTask={addTask} />
                                                                        {}
                                                                        <ToDoList tasks={tasks} />

                                                                        <Button
                                                                                                title="Go to About"
                                                                                                onPress={() => navigation.navigate('AboutScreen')}
                                                                        />
                                                                        </SafeAreaView>
                                                    </MainLayout>

                                                </>
                        );

}

export default HomeScreen; 