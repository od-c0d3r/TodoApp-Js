/**
 * @jest-environment jsdom
 */

import Project from '../../src/project';
import Todo from '../../src/todo';
import * as common from '../../src/common';

describe('Todo Class tests suite', () => {
  const titleInput = 'todoTitle';
  const todo = new Todo(titleInput);

  it('creates a new todo object', () => {
    expect(todo).toBeTruthy();
  });

  it('deletes a todo object', () => {
    const project = new Project('Default');
    const projects = [project];
    project.todos.push('New Todo');

    common.removeTodo(0, 0, projects);
    expect(project.todos).toEqual([]);
  });

  it('todo object title matches the input title', () => {
    expect(todo.title).toBe(titleInput);
  });

  it("shows a project's todos", () => {
    document.body.innerHTML = '<div id="todoScreen"></div>';
    const todoScreen = document.getElementById('todoScreen');
    const actual = common.showTodos(new Project('Default'), todoScreen);
    expect(actual.outerHTML).toMatch('<div id="todoScreen">Default\'s Todos <br><ul></ul><button id="addTodoBtn">➕</button></div>');
  });

  it("shows an update form for a project's todo", () => {
    document.body.innerHTML = '<div id="detailsScreen"></div>';
    const newTodo = {
      title: 'Todo',
      description: 'Desc',
      dueDate: '12/12/2021',
      priority: 'low',
    };
    const detailsScreen = document.getElementById('detailsScreen');
    const actual = common.updateTodo(newTodo, detailsScreen);
    expect(actual.outerHTML).toMatch('<form><input type="text" placeholder="Title" value="Todo"><input type="text" placeholder="Description" value="Desc"><input type="date" placeholder="Due Date" value="12/12/2021"><input type="number" placeholder="Priority" value="low"><button type="button">Update</button></form>');
  });
});
