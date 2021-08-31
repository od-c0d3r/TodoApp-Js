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

  it('todo object title matches the input title', () => {
    expect(todo.title).toBe(titleInput);
  });

  it("shows a project's todos", () => {
    document.body.innerHTML = '<div id="todoScreen"></div>';
    const todoScreen = document.getElementById('todoScreen');
    const actual = common.showTodos(new Project('Default'), todoScreen);

    expect(actual.outerHTML).toMatch('<div id="todoScreen">Default\'s Todos <br><ul></ul><button id="addTodoBtn">➕</button></div>');
  });
});