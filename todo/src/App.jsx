import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux"
import { selectTodoList } from "./features/todoSlice"

function App() {
    const todos = useSelector(selectTodoList);
    return (
        <div className="App">
            <div className="App__container">
                <Input />
                <div className="App__todocontainer">
                    {todos.map((todo, index) => (
                        <TodoItem key={index} {...todo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
