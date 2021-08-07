import * as app from './app';
import Project from './project';
import { projects } from './project';

let projectDefault = new Project('Default');

app.appStructureCaller();
Project.displayProjects(projects);
Project.showTodos(projectDefault);
app.addingProjBtn();
app.projectsEvents();
