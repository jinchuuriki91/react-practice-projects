import "./todoitem.css"
import Checkbox from "@material-ui/core/Checkbox"

import { setCheck } from "../../features/todoSlice"
import { useDispatch } from "react-redux"

const TodoItem = ({task, done, id}) => {
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
            />
            <p className={done ? "todoItem--done":""}>{task}</p>
        </div>
    )
}

export default TodoItem;
