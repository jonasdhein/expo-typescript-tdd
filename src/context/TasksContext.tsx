import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, ReactElement, useContext, useEffect, useState } from 'react';

//interface para o children
interface IProps {
    children: ReactElement;
}

export interface ITask {
    id: string;
    title: string;
}

export interface ITasksContext {
    tasks: ITask[];
    addTask(task: ITask): void;
    removeTask(id: string): void;
}

//chave para gravar o registro no banco
const tasksData = '@MyTasks:Tasks';

//{} as ITasksContext ao invés de precisar criar um objeto vazio
export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

//o ideal é evitar o uso do FC. Neste caso, podemos tipar o atributo ao inves do metodo
export const TasksProvider = ({ children } : IProps) => {
//export const TasksProvider: FC<IProps> = ({ children }) => {

    // STATE para armazenar as tarefas do banco de dados
    const [data, setData] = useState<ITask[]>([]);

    useEffect(() => {
        async function loadTasks() {
            const taskList = await AsyncStorage.getItem(tasksData);
            if (taskList) {
                setData(JSON.parse(taskList));
            }
        }

        loadTasks();
    }, [])//o array de dependencias vazio faz com que a chamada seja executada somente na criação do componente

    const addTask = async (task: ITask) => {
        try {
            const newTaskList = [...data, task];
            setData(newTaskList);
            await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));

        } catch (error) {
            throw new Error(error as string);
        }
    }

    const removeTask = async (id: string) => {
        try {
            const newTaskList = data.filter(task => task.id!== id);
            setData(newTaskList);
            await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));

        }catch(error){

        }
    }

    return (
        <TasksContext.Provider value={{ tasks: data, addTask, removeTask }}>
            {children}
        </TasksContext.Provider>
    );
};

//useTaskList => hook personalizado para deixar mais simplificada a utilização
export function useTaskList(): ITasksContext {
    const context = useContext(TasksContext);
    
    //esta verificacao diz que para ser utilizado, este hook precisa estar dentro de um provider
    if (context === undefined) {
        throw new Error("useTaskList must be used within a TaskProvider");
    }

    return context;
}