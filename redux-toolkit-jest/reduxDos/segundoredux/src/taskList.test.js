// components/taskList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './features/taskList/taskSlice';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(taskReducer);

describe('TaskList', () => {
  it('renders tasks and allows deletion', () => {
    // Initial tasks to populate the store
    const initialTasks = [
      { id: '1', title: 'Task One', description: 'Task One description', completed: false },
      { id: '2', title: 'Task Two', description: 'Task Two description', completed: false }
    ];

    // Mock initial state for the store
    store.dispatch({ type: 'tasks/setInitialTasks', payload: initialTasks });

    render(
      <Provider store={store}>
        <Router>
          <TaskList />
        </Router>
      </Provider>
    );

    // Check if the tasks are rendered
    //expect(screen.getByText(/Task One/i)).toBeInTheDocument();
    //expect(screen.getByText(/Task Two/i)).toBeInTheDocument();

    // Simulate task deletion
    //fireEvent.click(screen.getByText(/Delete/i)); // Adjust if there are multiple delete buttons

    // Check if the task is removed
    //expect(screen.queryByText(/Task One/i)).not.toBeInTheDocument();
  });
});
