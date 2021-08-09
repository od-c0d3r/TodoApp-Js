import { projects } from './project';
import Project from './project';

export const appStructureCaller = () => {

    if (JSON.parse(localStorage.projects).length == 0) {
        new Project('Default');
    }

    const main = document.createElement('main');
    main.id = 'main';
    const containerFluid = document.createElement('div')
    containerFluid.className = 'container-fluid';

    const divContainer = document.createElement('div')
    divContainer.className = 'row';
    divContainer.id = 'divContainer';

    const projectScreen = document.createElement('div');
    projectScreen.classList = 'col bg-warning p-0';
    projectScreen.id = 'projectScreen';
    const projectsList = document.createElement('ul');
    projectsList.id = 'projectsList';
    projectScreen.innerHTML += projectsList.outerHTML

    const todoScreen = document.createElement('div');
    todoScreen.classList = 'col bg-danger p-0';
    todoScreen.id = 'todoScreen';

    const detailsScreen = document.createElement('div');
    detailsScreen.classList = 'col bg-dark p-0';
    detailsScreen.style = 'color:white;'
    detailsScreen.id = 'detailsScreen';

    divContainer.innerHTML += projectScreen.outerHTML + todoScreen.outerHTML + detailsScreen.outerHTML
    containerFluid.innerHTML += divContainer.outerHTML;
    main.innerHTML += containerFluid.outerHTML;
    document.body.appendChild(main);

    Project.displayProjects( JSON.parse(localStorage.projects));
    Project.showTodos(JSON.parse(localStorage.projects)[0]);

    return main
}

export const projectsEvents = () => {
    const projects = JSON.parse(localStorage.projects)
    const projectsListeners = document.querySelectorAll('.projectItem');
    for (let projectHTML of projectsListeners) {
        for (let projectObj of projects) {
            if (projectHTML.innerHTML === projectObj.name) {
                projectHTML.addEventListener('click', () => {
                    Project.showTodos(JSON.parse(localStorage.projects)[projects.indexOf(projectObj)]);
                })
            }
        }
    }
}

export const addProjFrm = () => {
    const projectsContainer = document.getElementById('projectScreen');
    const form = document.createElement('form')
    const input = document.createElement('input');
    const btn = document.createElement('button');

    btn.innerHTML = 'Create';
    btn.setAttribute("type", "button");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Name");

    form.append(input, btn);
    projectsContainer.appendChild(form);

    btn.addEventListener('click', () => {
        let project = new Project(input.value);

        const btn = document.getElementById('addProjBtn');
        form.className = "d-none";
        btn.className = 'd-block'

        Project.displayProjects(JSON.parse(localStorage.projects));
        projectsEvents(JSON.parse(localStorage.projects));
    });
}

export const addingProjBtn = () => {
    const newAddbtn = document.createElement('button');
    newAddbtn.innerHTML = '➕'
    newAddbtn.id = 'addProjBtn'
    const projectsContainer = document.getElementById('projectScreen');
    projectsContainer.appendChild(newAddbtn);

    newAddbtn.addEventListener('click', () => {
        newAddbtn.className = 'd-none'
        addProjFrm();
    });
};
