import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todos2',
    initialState: [
        { title: 'sports', description: 'Play cricket in the evening', key: '1' },
        { title: 'Mobile Apps', description: 'Create a mobile app', key: '2' },
        { title: 'Learning', description: 'Read a history book', key: '5' },
    ],
    reducers: {
        addNewTodo: (state, action) => {
            const todo = {
                key: Math.random().toString(),
                title: action.payload.title,
                description: action.payload.description,
            };
            state.push(todo);
        },
    }
});

export const { addNewTodo } = TodoSlice.actions;

export default TodoSlice.reducer;