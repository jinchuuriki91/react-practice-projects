import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, actions) => {
            state.todoList.push(actions.payload);
        },
        setCheck: (state, actions) => {
            state.todoList.map(todo => {
                if (todo.id === actions.payload) {
                    todo.done = !todo.done;
                }
                return todo
            })
        }
    },
});

export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;
