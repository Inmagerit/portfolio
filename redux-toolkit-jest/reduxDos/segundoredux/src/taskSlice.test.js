import taskReducer, { addTask, deleteTask, updateTask } from './features/taskList/taskSlice';

describe('taskSlice tests', () => {
  const initialState = [
    {
      id: '1',
      title: 'Task One',
      description: 'Task One description',
      completed: false
    }
  ];

  

  it('should handle a task being added to an empty list', () => {
    const newTask = { id: '2', title: 'Task Two', description: 'Task Two description', completed: false };
    const actual = taskReducer([], addTask(newTask));
    expect(actual).toEqual([newTask]);
  });

  it('should handle a task being deleted', () => {
    const actual = taskReducer(initialState, deleteTask('1'));
    expect(actual).toEqual([]);
  });

  it('should handle a task being updated', () => {
    const updates = { title: 'Updated Task One' };
    const actual = taskReducer(initialState, updateTask({ id: '1', updates }));
    expect(actual[0].title).toEqual('Updated Task One');
  });
});
