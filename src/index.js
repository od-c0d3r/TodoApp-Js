import * as app from './app';
import Project from './project';
import { projects } from './project';

let projectDefault = new Project('Default');

app.appStructureCaller();
app.addingProjBtn();
Project.displayProjects(projects);
Project.showTodos(projectDefault);
app.projectsEvents();