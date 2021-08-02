/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var main = document.getElementById('main');
main.innerHTML = "<h1># Todo list App</h1>";
var projects = [];

var Project = /*#__PURE__*/function () {
  function Project(name) {
    _classCallCheck(this, Project);

    this.name = name;
    this.todos = [];
    projects.push(this);
  }

  _createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todoObj) {
      return this.todos.push(todoObj);
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(todoObj) {
      return this.todos.splice(this.todos.indexOf[todoObj], 1);
    }
  }, {
    key: "updateProject",
    value: function updateProject(newName) {
      return this.name = newName;
    }
  }, {
    key: "deleteProject",
    value: function deleteProject() {
      return projects.splice(projects.indexOf(this), 1);
    }
  }]);

  return Project;
}();

var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority) {
    _classCallCheck(this, Todo);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  _createClass(Todo, [{
    key: "updateTodo",
    value: function updateTodo(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }]);

  return Todo;
}();

var proj1todo1 = new Todo("Clean the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var project0 = new Project('Default');
var project1 = new Project('home');
var project2 = new Project('work');
var project3 = new Project('trip');
project2.deleteProject();
console.log(projects);
projects[0].addTodo(proj1todo1);
projects[0].addTodo("Wash the deshes");
projects[0].addTodo("Buy Milk");
console.log(projects[0].name);
console.log(projects[0].todos);
projects[0].removeTodo(proj1todo1);
console.log(projects[0].todos);
projects[1].addTodo("Clean the room");
projects[1].addTodo("Wash the deshes");
projects[1].addTodo("Buy Milk");
console.log(projects[1].name);
console.log(projects[1].todos);
var project4 = new Project('italy');
projects[2].addTodo("Clean the room");
projects[2].addTodo("Wash the deshes");
projects[2].addTodo("Buy Milk");
console.log(projects[2].name);
console.log(projects[2].todos);
/******/ })()
;
//# sourceMappingURL=main.js.map