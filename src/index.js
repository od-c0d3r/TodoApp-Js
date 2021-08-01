const main = document.getElementById('main');
main.innerHTML = "<h1># Todo list App</h1>"

let projects = []

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        projects.push(this)
    }

    static showProjects() {
        console.log(projects)
    }

    addTodo(todoObj) {
        this.todos.push(todoObj)
    }
}

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let project1 = new Project('home')
let project2 = new Project('work')
let project3 = new Project('trip')

console.log(projects)

project1.addTodo("Clean the room");
project1.addTodo("Wash the deshes");
project1.addTodo("Buy Milk");
console.log(project1.name)
console.log(project1.todos)

project2.addTodo("Clean the room");
project2.addTodo("Wash the deshes");
project2.addTodo("Buy Milk");
console.log(project2.name)
console.log(project2.todos)

project3.addTodo("Clean the room");
project3.addTodo("Wash the deshes");
project3.addTodo("Buy Milk");
console.log(project3.name)
console.log(project3.todos)
