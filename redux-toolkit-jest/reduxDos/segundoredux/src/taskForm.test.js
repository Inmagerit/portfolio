// components/taskForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';

import TaskForm from './components/TaskForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './features/taskList/taskSlice';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(taskReducer);

describe('TaskForm', () => {
  it('renders the form and allows submission', () => {
    render(
      <Provider store={store}>
        <Router>
          <TaskForm />
        </Router>
      </Provider>
    );

   
    expect(screen.getByPlaceholderText(/Title for task/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Task description/i)).toBeInTheDocument();

   
    fireEvent.change(screen.getByPlaceholderText(/Title for task/i), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByPlaceholderText(/Task description/i), { target: { value: 'Task description' } });
    fireEvent.click(screen.getByText(/Save/i));

  });
});
