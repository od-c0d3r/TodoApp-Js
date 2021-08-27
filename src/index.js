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
Project.projectsEvents();
