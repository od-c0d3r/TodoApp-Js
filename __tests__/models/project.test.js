import Project from '../../src/project'
import Todo from '../../src/todo.js'


describe("Project Class tests suite", () => {

  it("creates a new project object", () => {
    const actual = new Project('Homeworks');
    
    expect(actual).toBeTruthy();
  });

  it("project object title matches the input title", () => {
    const expected = 'Homeworks';
    const actual = new Project('Homeworks');

    expect(actual.name).toBe(expected);
  });

  it("adds a todo object to the project object todos variable", () => {
    const todo = new Todo('Todo')
    const actual = new Project('Homeworks');

    expect(actual.addTodo(todo)).toBe(1);
  });
  
  it("updates the project name", () => {
    const newProject = new Project('Homeworks');
    const actual = newProject.updateProject('newName')

    expect(actual).toBe('newName');
  });

});
