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
      this.todos.push(todoObj);
    }
  }], [{
    key: "showProjects",
    value: function showProjects() {
      console.log(projects);
    }
  }]);

  return Project;
}();

var Todo = function Todo(title, description, dueDate, priority) {
  _classCallCheck(this, Todo);

  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};

var project1 = new Project('home');
var project2 = new Project('work');
var project3 = new Project('trip');
console.log(projects);
project1.addTodo("Clean the room");
project1.addTodo("Wash the deshes");
project1.addTodo("Buy Milk");
console.log(project1.name);
console.log(project1.todos);
project2.addTodo("Clean the room");
project2.addTodo("Wash the deshes");
project2.addTodo("Buy Milk");
console.log(project2.name);
console.log(project2.todos);
project3.addTodo("Clean the room");
project3.addTodo("Wash the deshes");
project3.addTodo("Buy Milk");
console.log(project3.name);
console.log(project3.todos);
/******/ })()
;
//# sourceMappingURL=main.js.map