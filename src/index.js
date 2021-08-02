const main = document.getElementById('main');
main.innerHTML = "<h1># Todo list App</h1>";

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
}

class Todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };

    updateTodo (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
}

let proj1todo1 = new Todo("Clean the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)

let project0 = new Project('Default')
let project1 = new Project('home')
let project2 = new Project('work')
let project3 = new Project('trip')

project2.deleteProject()

console.log(projects)

projects[0].addTodo(proj1todo1);
projects[0].addTodo("Wash the deshes");
projects[0].addTodo("Buy Milk");
console.log(projects[0].name)
console.log(projects[0].todos)
projects[0].removeTodo(proj1todo1)
console.log(projects[0].todos)

projects[1].addTodo("Clean the room");
projects[1].addTodo("Wash the deshes");
projects[1].addTodo("Buy Milk");
console.log(projects[1].name)
console.log(projects[1].todos)

let project4 = new Project('italy')

projects[2].addTodo("Clean the room");
projects[2].addTodo("Wash the deshes");
projects[2].addTodo("Buy Milk");
console.log(projects[2].name)
console.log(projects[2].todos)
