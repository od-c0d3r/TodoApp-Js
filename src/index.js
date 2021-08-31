import * as app from './app';
import Project from './project';

if (typeof (localStorage.projects) === 'undefined') {
  const projects = [];
  localStorage.setItem('projects', JSON.stringify(projects));
  const newDefault = () => Project.saveToLocal(new Project('Default'));
  newDefault();
  localStorage.setItem('projects', JSON.stringify(projects));
} else {
  const projects = JSON.parse(localStorage.projects);
  localStorage.setItem('projects', JSON.stringify(projects));
}

app.appStructureCaller();
app.addingProjBtn();

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

const projectDeleteBtns = document.querySelectorAll('.projDelBtn');

projectDeleteBtns.forEach((projectDeleteBtn, index) => {
  projectDeleteBtn.addEventListener('click', () => {
    Project.deleteProject(index);
    Project.displayProjects(JSON.parse(localStorage.projects));
    Project.projectsEvents(JSON.parse(localStorage.projects));
    common.showTodos(JSON.parse(localStorage.projects)[index]);
  });
});