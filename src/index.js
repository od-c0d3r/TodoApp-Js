import * as app from './app';
import Project from './project';


if (typeof(localStorage.projects) == 'undefined') {
    let projects = [];
    localStorage.setItem("projects", JSON.stringify(projects));
    new Project('Default');
    localStorage.setItem("projects", JSON.stringify(projects));
} else {
    let projects = JSON.parse(localStorage.projects);
    localStorage.setItem("projects", JSON.stringify(projects));
}

app.appStructureCaller();
app.addingProjBtn();
app.projectsEvents(JSON.parse(localStorage.projects));
