import Todo from '../../src/todo';

const titleInput = 'todoTitle';
const todo = new Todo(titleInput);

describe('Todo Class tests suite', () => {
  it('creates a new todo object', () => {
    expect(todo).toBeTruthy();
  });

  it('todo object title matches the input title', () => {
    expect(todo.title).toBe(titleInput);
  });
});
