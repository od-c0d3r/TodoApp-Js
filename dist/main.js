/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appStructureCaller": () => (/* binding */ appStructureCaller),
/* harmony export */   "projectsEvents": () => (/* binding */ projectsEvents),
/* harmony export */   "addProjFrm": () => (/* binding */ addProjFrm),
/* harmony export */   "addingProjBtn": () => (/* binding */ addingProjBtn)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var appStructureCaller = function appStructureCaller() {
  var main = document.createElement('main');
  main.id = 'main';
  var containerFluid = document.createElement('div');
  containerFluid.className = 'container-fluid';
  var divContainer = document.createElement('div');
  divContainer.className = 'row';
  divContainer.id = 'divContainer';
  var projectScreen = document.createElement('div');
  projectScreen.classList = 'col bg-warning p-0';
  projectScreen.id = 'projectScreen';
  var projectsList = document.createElement('ul');
  projectsList.id = 'projectsList';
  projectScreen.innerHTML += projectsList.outerHTML;
  var todoScreen = document.createElement('div');
  todoScreen.classList = 'col bg-danger p-0';
  todoScreen.id = 'todoScreen';
  var detailsScreen = document.createElement('div');
  detailsScreen.classList = 'col bg-light p-0';
  detailsScreen.id = 'detailsScreen';
  divContainer.innerHTML += projectScreen.outerHTML + todoScreen.outerHTML + detailsScreen.outerHTML;
  containerFluid.innerHTML += divContainer.outerHTML;
  main.innerHTML += containerFluid.outerHTML;
  document.body.appendChild(main);
  return main;
};
var projectsEvents = function projectsEvents() {
  var projectsListeners = document.querySelectorAll('.projectItem');

  var _iterator = _createForOfIteratorHelper(projectsListeners),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var projectHTML = _step.value;

      var _iterator2 = _createForOfIteratorHelper(_project__WEBPACK_IMPORTED_MODULE_0__.projects),
          _step2;

      try {
        var _loop = function _loop() {
          var projectObj = _step2.value;

          if (projectHTML.innerHTML === projectObj.name) {
            projectHTML.addEventListener('click', function () {
              return _project__WEBPACK_IMPORTED_MODULE_0__.default.showTodos(projectObj);
            });
          }
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var addProjFrm = function addProjFrm() {
  var projectsContainer = document.getElementById('projectScreen');
  var form = document.createElement('form');
  var input = document.createElement('input');
  var btn = document.createElement('button');
  btn.innerHTML = 'Create';
  btn.setAttribute("type", "button");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Name");
  form.append(input, btn);
  projectsContainer.appendChild(form);
  btn.addEventListener('click', function () {
    var project = new _project__WEBPACK_IMPORTED_MODULE_0__.default(input.value);
    var btn = document.getElementById('addProjBtn');
    form.className = "d-none";
    btn.className = 'd-block';
    _project__WEBPACK_IMPORTED_MODULE_0__.default.displayProjects(_project__WEBPACK_IMPORTED_MODULE_0__.projects);
    projectsEvents();
  });
};
var addingProjBtn = function addingProjBtn() {
  var newAddbtn = document.createElement('button');
  newAddbtn.innerHTML = '➕';
  newAddbtn.id = 'addProjBtn';
  var projectsContainer = document.getElementById('projectScreen');
  projectsContainer.appendChild(newAddbtn);
  newAddbtn.addEventListener('click', function () {
    newAddbtn.className = 'd-none';
    addProjFrm();
  });
};

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
    value: function removeTodo(currentIndex) {
      return this.todos.splice(currentIndex, 1);
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
  }], [{
    key: "displayProjects",
    value: function displayProjects(projects) {
      var projectsList = document.getElementById('projectsList');
      projectsList.innerHTML = 'Projects List: <br>';

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
    }
  }]);

  return Project;
}();

_defineProperty(Project, "addTodoFrm", function (project) {
  var form = document.createElement('form');
  var title = document.createElement('input');
  var des = document.createElement('input');
  var dueDate = document.createElement('input');
  var priority = document.createElement('input');
  var btn = document.createElement('button');
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
  btn.addEventListener('click', function () {
    var todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(title.value, des.value, dueDate.value, priority.value);
    project.todos.push(todo);
    var btn = document.getElementById('addTodoBtn');
    form.className = "d-none";
    btn.className = 'd-block';
    Project.showTodos(project);
  });
});

_defineProperty(Project, "showTodos", function (project) {
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
      todoItem.classList.add("todoItem");
      var todoDeleteBtn = document.createElement('button');
      todoDeleteBtn.className = 'deleBtn';
      todoDeleteBtn.id = "".concat(todo.title);
      todoDeleteBtn.innerHTML = '❌';
      todoItem.innerHTML = todo.title;
      todosList.append(todoItem, todoDeleteBtn);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ;
  todoScreen.innerHTML += todosList.outerHTML;
  var newAddbtn2 = document.createElement('button');
  newAddbtn2.innerHTML = '➕';
  newAddbtn2.id = "addTodoBtn";
  todoScreen.appendChild(newAddbtn2);
  newAddbtn2.addEventListener('click', function () {
    newAddbtn2.className = 'd-none';
    Project.addTodoFrm(project);
  });
  var todosListeners = document.querySelectorAll('.todoItem');

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
              return _todo__WEBPACK_IMPORTED_MODULE_0__.default.showTodoDetails(todoObj);
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

  var todoDeleteBtns = document.querySelectorAll('.deleBtn');
  todoDeleteBtns.forEach(function (todoDeleteBtn, currentIndex) {
    todoDeleteBtn.addEventListener('click', function () {
      project.removeTodo(currentIndex);
      Project.showTodos(project);
    });
  });
  return todoScreen;
});


;

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority) {
    _classCallCheck(this, Todo);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  _createClass(Todo, null, [{
    key: "updateTodo",
    value: function updateTodo(todo, detailsScreen) {
      var form = document.createElement('form');
      var title = document.createElement('input');
      var des = document.createElement('input');
      var dueDate = document.createElement('input');
      var priority = document.createElement('input');
      var btn = document.createElement('button');
      btn.innerHTML = 'Update';
      btn.setAttribute("type", "button");
      title.setAttribute("type", "text");
      title.setAttribute("placeholder", "Title");
      title.setAttribute("value", todo.title);
      des.setAttribute("type", "text");
      des.setAttribute("placeholder", "Description");
      des.setAttribute("value", todo.description);
      dueDate.setAttribute("type", "date");
      dueDate.setAttribute("placeholder", "Due Date");
      dueDate.setAttribute("value", todo.dueDate);
      priority.setAttribute("type", "number");
      priority.setAttribute("placeholder", "Priority");
      priority.setAttribute("value", todo.priority);
      form.append(title, des, dueDate, priority, btn);
      detailsScreen.appendChild(form);
      btn.addEventListener('click', function () {
        todo.title = title.value;
        todo.description = des.value;
        todo.dueDate = dueDate.value;
        todo.priority = priority.value;
        var btn = document.getElementById('editBtn');
        form.className = "d-none";
        Todo.showTodoDetails(todo);
      });
    }
  }, {
    key: "showTodoDetails",
    value: function showTodoDetails(todo) {
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
      var updateBtn = document.createElement("button");
      updateBtn.className = 'editBtn';
      updateBtn.innerHTML = '✏️';
      detailsScreen.append(title, description, dueDate, priority, updateBtn);
      updateBtn.addEventListener('click', function () {
        updateBtn.className = 'd-none';
        Todo.updateTodo(todo, detailsScreen);
      });
    }
  }]);

  return Todo;
}();


;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



var projectDefault = new _project__WEBPACK_IMPORTED_MODULE_1__.default('Default');
_app__WEBPACK_IMPORTED_MODULE_0__.appStructureCaller();
_app__WEBPACK_IMPORTED_MODULE_0__.addingProjBtn();
_project__WEBPACK_IMPORTED_MODULE_1__.default.displayProjects(_project__WEBPACK_IMPORTED_MODULE_1__.projects);
_project__WEBPACK_IMPORTED_MODULE_1__.default.showTodos(projectDefault);
_app__WEBPACK_IMPORTED_MODULE_0__.projectsEvents();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map