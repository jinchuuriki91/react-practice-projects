import "./input.css";
import { useState } from "react";
import { saveTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";

const Input = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleTaskAdd = () => {
        dispatch(
            saveTodo({
                task: task,
                done: false,
                id: Date.now(),
            })
        );
    };
    return (
        <div className="input">
            <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <button onClick={handleTaskAdd}>Add</button>
        </div>
    );
};

export default Input;
