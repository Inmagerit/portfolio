import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/taskList/taskSlice";
import { v4 } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector(state => state.task); 

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        if (params.id) {
            const foundTask = tasks.find(task => task.id === params.id);
            if (foundTask) {
                setTask(foundTask);
            } else {
                console.log('Task not found');
            }
        }
    }, [params.id, tasks]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            // Update an existing task
            dispatch(updateTask({
                id: params.id,
                updates: task
            }));
        } else {
            // Create a new task
            dispatch(addTask({
                id: v4(),
                ...task
            }));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Task Form</h1>
            <input
                name="title"
                type="text"
                placeholder="Title for task"
                onChange={handleChange}
                value={task.title} // Changed from 'tasks.title' to 'task.title'
            />
            <textarea
                name="description"
                placeholder="Task description"
                onChange={handleChange}
                value={task.description} // Changed from 'tasks.description' to 'task.description'
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default TaskForm;
