import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:
        [
            {
                id: 1,
                text: "Hell0"
            },
            {
                id: 2,
                text: "hi"
            },
        ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload.text }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (action.payload.id === todo.id) {
                    return { ...todo, text: action.payload.text };
                } 
                else {
                    return todo;
                }
            })
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;