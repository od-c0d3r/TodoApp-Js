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
    expect(actual.addTodo(todo)).toBe(1);
  });

  it('updates the project name', () => {
    const newProject = new Project('Homeworks');
    const actual = newProject.updateProject('newName');
    expect(actual).toBe('newName');
  });

  it('gets projects from localStorage', () => {
    const projects = [];
    const actual = Project.getFromLocal(projects);
    expect(actual).toBe(projects);
  });

  it.skip('saves a project to the localStorage', () => {
    const projects = [];
    const newProject = new Project('Homeworks');
    const actual = Project.saveToLocal(newProject, projects);
    expect(actual).toBe([newProject]);
  });

  it('deletes a project from the array', () => {
    const projects = [];
    const newProject = new Project('Homeworks');
    projects.push(newProject);
    const actual = Project.deleteProject(0, projects);
    expect(actual).toEqual([]);
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