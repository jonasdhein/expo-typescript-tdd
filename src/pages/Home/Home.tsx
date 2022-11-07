import React, { ReactElement, useContext, useRef, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView, TextInputProps } from 'react-native';
import { TaskList } from '../../components/TaskList';
import { TasksContext, useTaskList } from '../../context/TasksContext';
import { styles } from './styles';

export const Home = () => {

    const [newTask, setNewTask] = useState('');
    //const [listTasks, setListTasks] = useState<Task[]>([]);

    // const tasks = useContext(TasksContext);
    // console.log('TASKS', tasks);
    // const {addTask} = useContext(TasksContext);
    const { addTask } = useTaskList();
    const txtNewTask = useRef<TextInput>(null); //precisa tirar para não apresentar erro na utilização no TextInput

    const handleAddNewTask = () => {
        const data = {
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task Empty'
        }

        addTask(data);

        if (txtNewTask.current) {
            setNewTask('');
            txtNewTask.current.focus();
        }

    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, Dev</Text>

                <TextInput
                    ref={txtNewTask}
                    placeholder='Nova tarefa'
                    onChangeText={(text) => setNewTask(text)}
                    value={newTask}
                    placeholderTextColor={'#005C53'}
                    style={styles.input} />

                <TouchableOpacity
                    onPress={handleAddNewTask}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>

                <Text style={styles.titleTasks}>Minhas Tarefas</Text>

                <TaskList />

            </View>
        </SafeAreaView>
    )
}
