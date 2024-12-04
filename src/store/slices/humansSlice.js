import { createSlice, nanoid } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

const initialState = [
    {
        id: nanoid(),
        name: 'Krisko',
        taskIds: []
    },
    {
        id: nanoid(),
        name: 'Dobri',
        taskIds: []
    }
];

export const humansSlice = createSlice({
    name: 'humans',
    initialState,
    reducers: {
        addHuman(state, action) {
            const name = action.payload;

            state.push({ id: nanoid(), name, taskIds: [] });
        },
    },
    extraReducers: builder => {
        builder.addCase(tasksSlice.actions.assignToUser, (state, action) => {
            const { humanId, taskId } = action.payload;

            const human = state.find(({ id }) => id === humanId);

            human.taskIds.push(taskId);
        })
    }
});

export const { addHuman } = humansSlice.actions;