/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

;

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

; // PROJECTS VIEWS

var project0 = new Project('Default');
var project1 = new Project('home');
var project2 = new Project('work');
var project3 = new Project('trip');
var project4 = new Project('italy');
var project5 = new Project('paris');

var displayProjects = function displayProjects(projects) {
  var projectsList = document.getElementById('projectsList');
  projectsList.innerHTML = '';

  var _iterator = _createForOfIteratorHelper(projects),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      var projectItem = document.createElement('li');
      projectItem.className = "project".concat(project.name);
      projectItem.className = 'projectItem';
      projectItem.innerHTML = project.name;
      projectsList.innerHTML += projectItem.outerHTML;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
};

displayProjects(projects); // show todo details

var showTodoDetails = function showTodoDetails(todo) {
  console.log(todo);
  var detailsScreen = document.getElementById('detailsScreen');
  detailsScreen.innerHTML = '';
  var title = document.createElement('h3');
  title.innerHTML = todo.title;
  var description = document.createElement('p');
  description.innerHTML = "<b>Description: </b>".concat(todo.description, " <br>");
  var dueDate = document.createElement('p');
  dueDate.innerHTML = "<b>Due : </b>".concat(todo.dueDate, " <br>");
  var priority = document.createElement('p');
  priority.innerHTML = "<b>Priority : </b>".concat(todo.priority, " <br>");
  detailsScreen.append(title, description, dueDate, priority);
}; //// show todo views


var showTodos = function showTodos(project) {
  console.log("showTodos()");
  var todoScreen = document.getElementById('todoScreen');
  todoScreen.innerHTML = "To Do's view<br>";
  var todosList = document.createElement('ul');

  var _iterator2 = _createForOfIteratorHelper(project.todos),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var todo = _step2.value;
      var todoItem = document.createElement('li');
      todoItem.className = 'todoItem';
      todoItem.innerHTML = todo.title;
      todosList.innerHTML += todoItem.outerHTML;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ;
  todoScreen.innerHTML += todosList.outerHTML;
  var newAddbtn2 = document.createElement('button');
  newAddbtn2.innerHTML = '+';
  todoScreen.appendChild(newAddbtn2);
  newAddbtn2.addEventListener('click', function () {
    newAddbtn2.className = 'd-none';
    addTodoFrm();
  });
  var todosListeners = document.querySelectorAll('.todoItem');
  console.log(todosListeners);

  var _iterator3 = _createForOfIteratorHelper(todosListeners),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var todoHTML = _step3.value;

      var _iterator4 = _createForOfIteratorHelper(project.todos),
          _step4;

      try {
        var _loop = function _loop() {
          var todoObj = _step4.value;

          if (todoHTML.innerHTML === todoObj.title) {
            todoHTML.addEventListener('click', function () {
              return showTodoDetails(todoObj);
            });
          }
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};

var proj1todo1 = new Todo("Clean the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo2 = new Todo("1move the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo3 = new Todo("m2ove the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo4 = new Todo("mo3ve the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo5 = new Todo("mov4e the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo6 = new Todo("move5 the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo7 = new Todo("move 6the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
var proj1todo8 = new Todo("move t7he room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5);
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
showTodos(project0); /// form for adding project

var projectsContainer = document.getElementById('projectScreen');
var todoScreen = document.getElementById('todoScreen'); // <form action="/action_page.php">
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname" value="John"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname" value="Doe"><br><br>
//   <input type="submit" value="Submit">
// </form> 

var addProjFrm = function addProjFrm() {
  var form = document.createElement('form');
  var input = document.createElement('input');
  var btn = document.createElement('button');
  btn.innerHTML = 'Create';
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Name");
  form.append(input, btn);
  projectsContainer.appendChild(form);
}; // title, description, dueDate, priority
////////form for adding todos


var addTodoFrm = function addTodoFrm() {
  var form = document.createElement('form');
  var title = document.createElement('input');
  var des = document.createElement('input');
  var dueDate = document.createElement('input');
  var priority = document.createElement('input');
  var btn = document.createElement('button');
  btn.innerHTML = 'Create';
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
}; // testing eventLisinter


var projectsListeners = document.querySelectorAll('.projectItem');

var _iterator5 = _createForOfIteratorHelper(projectsListeners),
    _step5;

try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var projectHTML = _step5.value;

    var _iterator6 = _createForOfIteratorHelper(projects),
        _step6;

    try {
      var _loop2 = function _loop2() {
        var projectObj = _step6.value;

        if (projectHTML.innerHTML === projectObj.name) {
          projectHTML.addEventListener('click', function () {
            return showTodos(projectObj);
          });
        }
      };

      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  } /// new project btn event

} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}

var newAddbtn = document.createElement('button');
newAddbtn.innerHTML = '+';
projectsContainer.appendChild(newAddbtn);
newAddbtn.addEventListener('click', function () {
  newAddbtn.className = 'd-none';
  addProjFrm();
}); // show todo details event
// TESTING THE APP PROTOTYPE

console.log("//////// TESTING THE APP PROTOTYPE "); // let proj1todo1 = new Todo("Clean the room", "move the clothes to the lundry, remove the cups, make the bed", "Today", 5)
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
/******/ })()
;
//# sourceMappingURL=main.js.map