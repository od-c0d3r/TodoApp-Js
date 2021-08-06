import Todo from './todo';

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
        projectsList.innerHTML = 'Projects List: <br>';
    
        for (let project of projects) {
            const projectItem = document.createElement('li');
            projectItem.className = `project${project.name}`;
            projectItem.className = 'projectItem' 
            projectItem.innerHTML = project.name;
            projectsList.innerHTML += projectItem.outerHTML;
        };
        
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
            project.todos.push(todo);
    
            const btn = document.getElementById('addTodoBtn');
            form.className = "d-none";
            btn.className = 'd-block';
    
            Project.showTodos(project);
        });
    }

    static showTodos = (project) => {
        console.log("showTodos()")
        const todoScreen = document.getElementById('todoScreen');
        todoScreen.innerHTML = "To Do's view<br>"
        const todosList = document.createElement('ul');
    
        for (let todo of project.todos) {
            const todoItem = document.createElement('li');
            todoItem.className = 'todoItem';
            todoItem.innerHTML = todo.title;
            todosList.innerHTML += todoItem.outerHTML;
        };
        todoScreen.innerHTML += todosList.outerHTML
    
        const newAddbtn2 = document.createElement('button');
        newAddbtn2.innerHTML = '➕'
        newAddbtn2.id = "addTodoBtn"
    
        todoScreen.appendChild(newAddbtn2);
    
    
        newAddbtn2.addEventListener('click', () => {
            newAddbtn2.className = 'd-none';
            Project.addTodoFrm(project);
        });
    
        const todosListeners = document.querySelectorAll('.todoItem');
        console.log(todosListeners);
    
        for (let todoHTML of todosListeners) {
            for (let todoObj of project.todos) {
                if (todoHTML.innerHTML === todoObj.title) {
                    todoHTML.addEventListener('click', () => Todo.showTodoDetails(todoObj));
                }
            }
        }
    
        return todoScreen
    };
};