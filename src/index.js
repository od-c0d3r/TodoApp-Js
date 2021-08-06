import Project from './project'; 
import Todo from './todo'; 
import {projects} from './project'; 

// PROJECTS VIEWS

let project0 = new Project('Default');


// show todo details


//// show todo views

const showTodos = (project) => {
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
    newAddbtn2.innerHTML= '➕'
    newAddbtn2.id = "addTodoBtn"
    todoScreen.appendChild(newAddbtn2);

    
    newAddbtn2.addEventListener('click', () => {
        newAddbtn2.className ='d-none';
        addTodoFrm(project);
    });

    const todosListeners = document.querySelectorAll('.todoItem');
    console.log(todosListeners);

    for (let todoHTML of todosListeners) {
        for (let todoObj of project.todos) {
            if (todoHTML.innerHTML === todoObj.title) {
                todoHTML.addEventListener('click', ()=> Todo.showTodoDetails(todoObj));
            }
        }
    }
};


const projectsEvents = () => {
    const projectsListeners = document.querySelectorAll('.projectItem'); 
    for (let projectHTML of projectsListeners) {
        for (let projectObj of projects) {
            if (projectHTML.innerHTML === projectObj.name) {
                projectHTML.addEventListener('click', ()=> showTodos(projectObj));
            }
        }
    }
}

const projectsContainer = document.getElementById('projectScreen');
const todoScreen = document.getElementById('todoScreen');

const addProjFrm = () => {
    const form = document.createElement('form')
    const input = document.createElement('input');
    const btn = document.createElement('button');
    
    btn.innerHTML = 'Create';
    btn.setAttribute("type", "button");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Name");
    
    form.append(input, btn);
    projectsContainer.appendChild(form);

    btn.addEventListener('click', ()=> {
        let project = new Project(input.value);

        const btn = document.getElementById('addProjBtn');
        form.className = "d-none";
        btn.className = 'd-block'

        Project.displayProjects(projects);
        projectsEvents()
    });
} 

////////form for adding todos

const addTodoFrm = (project)=>{
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


    btn.addEventListener('click', ()=> {
        let todo = new Todo(title.value, des.value, dueDate.value, priority.value);
        project.todos.push(todo);
        
        const btn = document.getElementById('addTodoBtn');
        form.className = "d-none";
        btn.className = 'd-block';

        showTodos(project);
    });
} 

//// form for edit todo


/// new project btn event

const newAddbtn = document.createElement('button');
newAddbtn.innerHTML= '➕'
newAddbtn.id = 'addProjBtn'
projectsContainer.appendChild(newAddbtn);

newAddbtn.addEventListener('click', event => {
    newAddbtn.className ='d-none'
    addProjFrm();
});


Project.displayProjects(projects);
showTodos(project0);
projectsEvents();