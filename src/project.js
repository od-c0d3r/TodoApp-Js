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
  }

  addTodo(todoObj) {
    return this.todos.push(todoObj);
  }

  updateProject(newName) {
    this.name = newName;
    return this.name;
  }

  static deleteProject(index) {
    const projects = JSON.parse(localStorage.projects);
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    return projects;
  }

  static displayProjects(projects) {
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

    const projectDeleteBtns = document.querySelectorAll('.projDelBtn');

    projectDeleteBtns.forEach((projectDeleteBtn, index) => {
      projectDeleteBtn.addEventListener('click', () => {
        Project.deleteProject(index);
        Project.displayProjects(JSON.parse(localStorage.projects));
        Project.projectsEvents(JSON.parse(localStorage.projects));
        common.showTodos(JSON.parse(localStorage.projects)[index]);
      });
    });

    return projectsList
  }

  static projectsEvents = () => {
    const projects = JSON.parse(localStorage.projects);
    const projectsListeners = document.querySelectorAll('.projectItem');

    Object.keys(projectsListeners).forEach((projectHTMLIndex) => {
      Object.keys(projects).forEach((projectObjIndex) => {
        if (projectsListeners[projectHTMLIndex].innerHTML === projects[projectObjIndex].name) {
          projectsListeners[projectHTMLIndex].addEventListener('click', () => {
            common.showTodos(JSON.parse(localStorage.projects)[projectObjIndex]);
          });
        }
      });
    });
  };
}
