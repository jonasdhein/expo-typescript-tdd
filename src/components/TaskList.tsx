import React, { useContext } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ITask, TasksContext, useTaskList } from '../context/TasksContext';

export const TaskList = () => {

    // const { tasks } = useContext(TasksContext);
    const { tasks, removeTask } = useTaskList();
    // console.log('TASKS', tasks);

    const handleRemoveTask = (id: string) => {
        Alert.alert('Tem certeza?', 'Deseja mesmo excluir a tarefa?', [
            {
                text: 'Cancelar',
                onPress: () => {}
            },
            {
                text: 'Excluir',
                onPress: () => removeTask(id)
            }
        ])
    }

    return (
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.taskItem}
                    onPress={() => handleRemoveTask(item.id)}>
                    <Text style={styles.taskText}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    taskItem: {
        width: 'auto',
        backgroundColor: '#D6D58E',
        borderRadius: 16,
        margin: 8,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskText: {
        color: '#042940',
        fontSize: 14,
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
    titleTasks: {
        marginTop: 10,
        color: '#fff',
        fontSize: 18,
    },
    contentTitle: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10
    },
});