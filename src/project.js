import * as common from './common';

export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  static saveToLocal(project) {
    const projects = JSON.parse(localStorage.projects);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    return projects;
  }

  addTodo(todoObj) {
    return this.todos.push(todoObj);
  }

  updateProject(newName) {
    this.name = newName;
    return this.name;
  }

  static deleteProject(index, projects = JSON.parse(localStorage.projects)) {
    projects.splice(index, 1);

    try {
      localStorage.setItem('projects', JSON.stringify(projects));
    } catch (error) {
      return true;
    }
    return projects;
  }

  static displayProjects(projects = JSON.parse(localStorage.projects)) {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = 'Projects List: <br>';

    Object.keys(projects).forEach((projectIndex) => {
      const projectItem = document.createElement('li');
      const projectDelBtn = document.createElement('button');
      projectDelBtn.className = 'projDelBtn';
      projectDelBtn.innerHTML = '❌';
      projectItem.className = `project${projects[projectIndex].name}`;
      projectItem.className = 'projectItem';
      projectItem.innerHTML = projects[projectIndex].name;
      projectsList.innerHTML += projectItem.outerHTML + projectDelBtn.outerHTML;
    });

    return projectsList;
  }
}