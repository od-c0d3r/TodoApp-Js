let projects = []

class Project {
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

    // showTodos(){
    //     console.log("showTodos()")
    //     const todoScreen = document.getElementById('todoScreen');
    //     todoScreen.innerHTML = ''
    //     const todosList = document.createElement('ul');
    //     for (let todo of this.todos) {
    //         const todoItem = document.createElement('li');
    //         todoItem.innerHTML = todo.title;
    //         todosList.innerHTML += todoItem.outerHTML;
    //     };
    //     todoScreen.innerHTML += todosList.outerHTML
    // };
};

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };

    updateTodo(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

// PROJECTS VIEWS


let project0 = new Project('Default');
let project1 = new Project('home');
let project2 = new Project('work');
let project3 = new Project('trip');
let project4 = new Project('italy');
let project5 = new Project('paris');

const displayProjects = (projects) => {
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

displayProjects(projects);



// show todo details
const showTodoDetails = (todo) =>{ 
    console.log(todo);
    const detailsScreen = document.getElementById('detailsScreen');
    detailsScreen.innerHTML = ''

    const title = document.createElement('h3');
    title.innerHTML = todo.title

    const description = document.createElement('p');
    description.innerHTML = `<b>Description: </b>${todo.description} <br>`;

    const dueDate = document.createElement('p');
    dueDate.innerHTML = `<b>Due : </b>${todo.dueDate} <br>`

    const priority = document.createElement('p');
    priority.innerHTML = `<b>Priority : </b>${todo.priority} <br>`

    detailsScreen.append(title, description, dueDate, priority)
}

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
    newAddbtn2.innerHTML= '+'
    todoScreen.appendChild(newAddbtn2);

    
    newAddbtn2.addEventListener('click', () => {
        newAddbtn2.className ='d-none';
        addTodoFrm();
    });

    const todosListeners = document.querySelectorAll('.todoItem');
    console.log(todosListeners);

    for (let todoHTML of todosListeners) {
        for (let todoObj of project.todos) {
            if (todoHTML.innerHTML === todoObj.title) {
                todoHTML.addEventListener('click', ()=> showTodoDetails(todoObj));
            }
        }
    }
};

let proj1todo1 = new Todo("Clean the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo2 = new Todo("1move the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo3 = new Todo("m2ove the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo4 = new Todo("mo3ve the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo5 = new Todo("mov4e the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo6 = new Todo("move5 the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo7 = new Todo("move 6the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
let proj1todo8 = new Todo("move t7he room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)

projects[0].addTodo(proj1todo1);
projects[0].addTodo(proj1todo2);

projects[1].addTodo(proj1todo3);
projects[1].addTodo(proj1todo4);
projects[1].addTodo(proj1todo4);
projects[1].addTodo(proj1todo4);

projects[2].addTodo(proj1todo5);
projects[2].addTodo(proj1todo5);
projects[2].addTodo(proj1todo5);
projects[2].addTodo(proj1todo6);

projects[3].addTodo(proj1todo7);
projects[3].addTodo(proj1todo8);


projects[4].addTodo(proj1todo1);
projects[4].addTodo(proj1todo2);

showTodos(project0);




/// form for adding project
const projectsContainer = document.getElementById('projectScreen');
const todoScreen = document.getElementById('todoScreen');

// <form action="/action_page.php">
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname" value="John"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname" value="Doe"><br><br>
//   <input type="submit" value="Submit">
// </form> 

const addProjFrm = ()=>{
    const form = document.createElement('form')
    const input = document.createElement('input');
    const btn = document.createElement('button');
    
    btn.innerHTML = 'Create'
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Name");
    
    form.append(input, btn);
    projectsContainer.appendChild(form)
} 








// title, description, dueDate, priority
////////form for adding todos

const addTodoFrm = ()=>{
    const form = document.createElement('form')
    const title = document.createElement('input');
    const des = document.createElement('input');
    const dueDate = document.createElement('input');
    const priority = document.createElement('input');

    const btn = document.createElement('button');
    
    btn.innerHTML = 'Create'
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Name");

    des.setAttribute("type", "text");
    des.setAttribute("placeholder", "Description");

    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("placeholder", "Due Date");
    
    priority.setAttribute("type", "number");
    priority.setAttribute("placeholder", "Priority");
    
    form.append(title, des, dueDate, priority, btn);

    todoScreen.appendChild(form);
} 








// testing eventLisinter



const projectsListeners = document.querySelectorAll('.projectItem'); 


for (let projectHTML of projectsListeners) {
    for (let projectObj of projects) {
        if (projectHTML.innerHTML === projectObj.name) {
            projectHTML.addEventListener('click', ()=> showTodos(projectObj))
        }
    } 
    
} 

/// new project btn event
const newAddbtn = document.createElement('button');
newAddbtn.innerHTML= '+'
projectsContainer.appendChild(newAddbtn);

newAddbtn.addEventListener('click', () => {
    newAddbtn.className ='d-none'
    addProjFrm();
});


// show todo details event











// TESTING THE APP PROTOTYPE

console.log("//////// TESTING THE APP PROTOTYPE ")

// let proj1todo1 = new Todo("Clean the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)

// project2.deleteProject()

// console.log(projects)

// // projects[0].addTodo(proj1todo1);
// // projects[0].addTodo("Wash the deshes");
// // projects[0].addTodo("Buy Milk");
// console.log(projects[0].name)
// console.log(projects[0].todos)
// projects[0].removeTodo(proj1todo1)
// console.log(projects[0].todos)

// // projects[1].addTodo("Clean the room");
// // projects[1].addTodo("Wash the deshes");
// // projects[1].addTodo("Buy Milk");
// console.log(projects[1].name)
// console.log(projects[1].todos)

// // projects[2].addTodo("Clean the room");
// // projects[2].addTodo("Wash the deshes");
// // projects[2].addTodo("Buy Milk");
// console.log(projects[2].name)
// console.log(projects[2].todos)