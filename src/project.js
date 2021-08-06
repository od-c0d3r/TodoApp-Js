export let projects = []

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        projects.push(this);
    };

    addTodo(todoObj) {
        return this.todos.push(todoObj)
    };
    
    removeTodo(todoObj) {
        return this.todos.splice(this.todos.indexOf[todoObj], 1);
    };

    updateProject(newName) {
        return this.name = newName;
    };

    deleteProject() {
        return projects.splice(projects.indexOf(this), 1);
    };

    static displayProjects(projects) {
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = '';
    
        for (let project of projects) {
            const projectItem = document.createElement('li');
            projectItem.className = `project${project.name}`;
            projectItem.className = 'projectItem' 
            projectItem.innerHTML = project.name;
            projectsList.innerHTML += projectItem.outerHTML;
        };
        
    };
};