import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const initialState = [
    {
        id: v4(),
        title: 'Task One',
        description: 'Task One description',
        completed: false
    },
    {
        id: v4(),
        title: 'Task Two',
        description: 'Task Two description',
        completed: false
    }
];

export const taskSlice = createSlice({
    name: 'tasks', // Cambiado de 'task' a 'tasks' para reflejar que se trata de una lista de tareas
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload);
            if (taskIndex !== -1) {
                state.splice(taskIndex, 1);
            }
        },
        updateTask: (state, action) => {
            const { id, updates } = action.payload;
            const taskIndex = state.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                state[taskIndex] = { ...state[taskIndex], ...updates };
            }
        }
    }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
