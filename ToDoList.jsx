

import React from 'react';
import {
  
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
 
} from 'react-native';



function ToDoList() {




                        return (
                                                <ScrollView>
                                                                        <Pressable>
                                                                                                <View style={[styles.task, styles.completed]}>
                                                                                                                        <Text style={styles.taskText}>Play league of legends</Text>
                                                                                                </View>
                                                                        </Pressable>
                                                                        <Pressable>
                                                                                                <View style={[styles.task]}>
                                                                                                                        <Text style={styles.taskText}>Feed yourself</Text>
                                                                                                </View>
                                                                        </Pressable>
                                                                        <Pressable>
                                                                                                <View style={[styles.task, styles.completed]}>
                                                                                                                        <Text style={styles.taskText}>Talk to girlfriend</Text>
                                                                                                </View>
                                                                        </Pressable>
                                                </ScrollView>
                                                
                          
                        );
                      }
                      
                      const styles = StyleSheet.create({
                        task: {
                          padding: 10,
                          borderBottomWidth: 1,
                          borderColor: '#ccc',
                        },
                        completed: {
                          backgroundColor: '#e0e0e0',
                        },
                        taskText: {
                          fontSize: 16,
                        },
                        form: {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginHorizontal: 20,
                          marginTop: 20,
                        },
                        input: {
                          flex: 1,
                          borderWidth: 1,
                          borderColor: '#ccc',
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          marginRight: 10,
                        },
                      });
                      
                      export default ToDoList;
                      