import { createSlice, nanoid } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask(state, action) {
            const task = {
                id: nanoid(),
                title: action.payload,
                completed: false,
                assignedTo: ''
            };

            state.push(task);
        },
        assignToUser(state, action) {
            const { taskId, humanId } = action.payload;

            const task = state.find(({ id }) => id === taskId);
            task.assignedTo = humanId;
        },
        toggleTask(state, action) {
            const { taskId, isCompleted } = action.payload;

            const task = state.find(({ id }) => id === taskId);
            task.completed = isCompleted;
        },
    }
});

export const { addTask, assignToUser, toggleTask } = tasksSlice.actions;