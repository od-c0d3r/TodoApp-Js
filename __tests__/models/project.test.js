/**
 * @jest-environment jsdom
 */

import Project from '../../src/project';
import Todo from '../../src/todo';

describe('Project Class tests suite', () => {
  it('creates a new project object', () => {
    const actual = new Project('Homeworks');
    expect(actual).toBeTruthy();
  });

  it('project object title matches the input title', () => {
    const expected = 'Homeworks';
    const actual = new Project('Homeworks');
    expect(actual.name).toBe(expected);
  });

  it('adds a todo object to the project object todos variable', () => {
    const todo = new Todo('Todo');
    const actual = new Project('Homeworks');
    actual.addTodo(todo);
    expect(actual.todos).toEqual([todo]);
  });

  it('updates the project name', () => {
    const newProject = new Project('Homeworks');
    const actual = newProject.updateProject('newName');
    expect(actual).toBe('newName');
  });

  it('deletes a project from the array', () => {
    const projects = [];
    const newProject = new Project('Homeworks');
    projects.push(newProject);
    const actual = Project.deleteProject(0, projects);
    expect(actual).toEqual([]);
  });

  it('saves to localStorage', () => {
    const newProject = new Project('Homeworks');
    const actual = Project.saveToLocal(newProject);
    expect(actual).toContain(newProject);
  });

  it('displays the projects list', () => {
    const projects = [new Project('Default')];
    document.body.innerHTML = '<ul id="projectsList"></ul>';
    const actual = Project.displayProjects(projects);
    expect(actual.outerHTML).toMatch(
      '<ul id="projectsList">Projects List: <br><li class="projectItem">Default</li><button class="projDelBtn">❌</button></ul>',
    );
  });
});