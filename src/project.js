import Todo from './todo';
import * as app from './app';

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        let projects = JSON.parse(localStorage.projects);
        projects.push(this);
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    addTodo(todoObj) {
        return this.todos.push(todoObj)
    };

    removeTodo(currentIndex) {
        return this.todos.splice(currentIndex, 1);
    };

    updateProject(newName) {
        return this.name = newName;
    };

    static deleteProject(index) {
        let projects = JSON.parse(localStorage.projects);
        projects.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
        return projects
    };

    static displayProjects(projects) {
        const projectsList = document.getElementById('projectsList');
        projectsList.innerHTML = 'Projects List: <br>';

        for (let project of projects) {
            const projectItem = document.createElement('li');
            const projectDelBtn = document.createElement('button');
            projectDelBtn.className = 'projDelBtn';
            projectDelBtn.innerHTML = '❌';
            projectItem.className = `project${project.name}`;
            projectItem.className = 'projectItem';
            projectItem.innerHTML = project.name;
            projectsList.innerHTML += projectItem.outerHTML + projectDelBtn.outerHTML;
        };

        const projectDeleteBtns = document.querySelectorAll('.projDelBtn');

        projectDeleteBtns.forEach(function (projectDeleteBtn, index) {
            projectDeleteBtn.addEventListener('click', () => {
                Project.deleteProject(index);
                Project.displayProjects(JSON.parse(localStorage.projects));
                app.projectsEvents(JSON.parse(localStorage.projects));
                Project.showTodos(JSON.parse(localStorage.projects)[index]);
            });
        });
    };

    static addTodoFrm = (project) => {
        const form = document.createElement('form')
        const title = document.createElement('input');
        const des = document.createElement('input');
        const dueDate = document.createElement('input');
        const priority = document.createElement('input');
        const btn = document.createElement('button');

        btn.innerHTML = 'Create';
        btn.setAttribute("type", "button");

        title.setAttribute("type", "text");
        title.setAttribute("placeholder", "Title");

        des.setAttribute("type", "text");
        des.setAttribute("placeholder", "Description");

        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("placeholder", "Due Date");

        priority.setAttribute("type", "number");
        priority.setAttribute("placeholder", "Priority");

        form.append(title, des, dueDate, priority, btn);

        todoScreen.appendChild(form);

        btn.addEventListener('click', () => {
            let todo = new Todo(title.value, des.value, dueDate.value, priority.value);
            
            let index = 0;
            const projects = JSON.parse(localStorage.projects);
            projects.forEach( (obj, indx)=> {
                if(project.name == obj.name) {
                    return index = indx;
                }
            });

            projects[index].todos.push(todo);
            localStorage.setItem("projects", JSON.stringify(projects));
            
            const btn = document.getElementById('addTodoBtn');
            form.className = "d-none";
            btn.className = 'd-block';
    
            Project.showTodos(JSON.parse(localStorage.projects)[index]);
        });

        return form;
    }

    static showTodos = (project) => {
        const todoScreen = document.getElementById('todoScreen');
        todoScreen.innerHTML = `${project.name}'s Todos <br>`
        const todosList = document.createElement('ul');

        for (let todo of project.todos) {
            const todoItem = document.createElement('li');
            todoItem.classList.add("todoItem");
            const todoDeleteBtn = document.createElement('button');
            todoDeleteBtn.className = 'deleBtn';
            todoDeleteBtn.innerHTML = '❌';
            todoItem.innerHTML = todo.title;
            todosList.append(todoItem, todoDeleteBtn);
        };

        todoScreen.innerHTML += todosList.outerHTML

        const newAddbtn2 = document.createElement('button');
        newAddbtn2.innerHTML = '➕'
        newAddbtn2.id = "addTodoBtn"

        todoScreen.appendChild(newAddbtn2);
        
        newAddbtn2.addEventListener('click', () => {
            newAddbtn2.className = 'd-none';
            Project.addTodoFrm(project);
        });;


        const todosListeners = document.querySelectorAll('.todoItem');

        for (let todoHTML of todosListeners) {
            for (let todoObj of project.todos) {
                if (todoHTML.innerHTML === todoObj.title) {
                    todoHTML.addEventListener('click', () => Todo.showTodoDetails(todoObj, project));
                }
            }
        }

        const todoDeleteBtns = document.querySelectorAll('.deleBtn');
        const detailsScreen = document.getElementById('detailsScreen');

        todoDeleteBtns.forEach(function (todoDeleteBtn, currentIndex) {
            todoDeleteBtn.addEventListener('click', () => {
                console.log(project);
                console.log(JSON.parse(localStorage.projects))
                project.removeTodo(currentIndex);
                Project.showTodos(project);
                detailsScreen.innerHTML = '';
            });
        });

        return todoScreen
    };
};