import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/taskList/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task || []); // Asegúrate de que `tasks` sea un array

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <header>
                <h1>Tasks in List: {tasks.length}</h1>
                <Link to='/create-task'>Create Task</Link>
            </header>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <div key={task.id}>
                        <h1>{task.title}</h1><br/>
                        <p>{task.description}</p><br/>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <Link to={`/edit-task/${task.id}`}>Edit Task</Link>
                    </div>
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default TaskList;
