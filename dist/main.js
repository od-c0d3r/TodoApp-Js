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
/* harmony export */   "addProjFrm": () => (/* binding */ addProjFrm),
/* harmony export */   "addingProjBtn": () => (/* binding */ addingProjBtn)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/common.js");


var appStructureCaller = function appStructureCaller() {
  if (JSON.parse(localStorage.projects).length === 0) {
    var newDefault = function newDefault() {
      return new _project__WEBPACK_IMPORTED_MODULE_0__.default('Default');
    };

    newDefault();
  }

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
  detailsScreen.classList = 'col bg-dark p-0';
  detailsScreen.style = 'color:white;';
  detailsScreen.id = 'detailsScreen';
  divContainer.innerHTML += projectScreen.outerHTML + todoScreen.outerHTML;
  divContainer.innerHTML += detailsScreen.outerHTML;
  containerFluid.innerHTML += divContainer.outerHTML;
  main.innerHTML += containerFluid.outerHTML;
  document.body.appendChild(main);
  _project__WEBPACK_IMPORTED_MODULE_0__.default.displayProjects(JSON.parse(localStorage.projects));
  _common__WEBPACK_IMPORTED_MODULE_1__.showTodos(JSON.parse(localStorage.projects)[0]);
  return main;
};
var addProjFrm = function addProjFrm() {
  var projectsContainer = document.getElementById('projectScreen');
  var form = document.createElement('form');
  var input = document.createElement('input');
  var btn = document.createElement('button');
  btn.innerHTML = 'Create';
  btn.setAttribute('type', 'button');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Name');
  form.append(input, btn);
  projectsContainer.appendChild(form);
  btn.addEventListener('click', function () {
    var project = function project() {
      return new _project__WEBPACK_IMPORTED_MODULE_0__.default(input.value);
    };

    project();
    var btn = document.getElementById('addProjBtn');
    form.className = 'd-none';
    btn.className = 'd-block';
    _project__WEBPACK_IMPORTED_MODULE_0__.default.displayProjects(JSON.parse(localStorage.projects));
    _project__WEBPACK_IMPORTED_MODULE_0__.default.projectsEvents(JSON.parse(localStorage.projects));
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

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateTodo": () => (/* binding */ updateTodo),
/* harmony export */   "showTodos": () => (/* binding */ showTodos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


var addTodoFrm = function addTodoFrm(project, fun) {
  var todoScreen = document.getElementById('todoScreen');
  var form = document.createElement('form');
  var title = document.createElement('input');
  var des = document.createElement('input');
  var dueDate = document.createElement('input');
  var priority = document.createElement('input');
  var btn = document.createElement('button');
  btn.innerHTML = 'Create';
  btn.setAttribute('type', 'button');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');
  des.setAttribute('type', 'text');
  des.setAttribute('placeholder', 'Description');
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('placeholder', 'Due Date');
  priority.setAttribute('type', 'number');
  priority.setAttribute('placeholder', 'Priority');
  form.append(title, des, dueDate, priority, btn);
  todoScreen.appendChild(form);
  btn.addEventListener('click', function () {
    var todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(title.value, des.value, dueDate.value, priority.value);
    var index = 0;
    var projects = JSON.parse(localStorage.projects);
    projects.forEach(function (obj, indx) {
      if (project.name === obj.name) {
        index = indx;
        return index;
      }

      return index;
    });
    projects[index].todos.push(todo);
    localStorage.setItem('projects', JSON.stringify(projects));
    var btn = document.getElementById('addTodoBtn');
    form.className = 'd-none';
    btn.className = 'd-block'; // showTodos

    fun(JSON.parse(localStorage.projects)[index]);
  });
  return form;
};

var removeTodo = function removeTodo(index, currentIndex) {
  var projects = JSON.parse(localStorage.projects);
  projects[index].todos.splice(currentIndex, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
};

var showTodoDetails = function showTodoDetails(todo, project, fun, fun2) {
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
  var updateBtn = document.createElement('button');
  updateBtn.className = 'editBtn';
  updateBtn.innerHTML = '✏️';
  detailsScreen.append(title, description, dueDate, priority, updateBtn);
  updateBtn.addEventListener('click', function () {
    updateBtn.className = 'd-none'; // updateTodo

    fun(todo, detailsScreen, project, fun2);
  });
};

var updateTodo = function updateTodo(todo, detailsScreen, project, fun) {
  var form = document.createElement('form');
  var title = document.createElement('input');
  var des = document.createElement('input');
  var dueDate = document.createElement('input');
  var priority = document.createElement('input');
  var btn = document.createElement('button');
  btn.innerHTML = 'Update';
  btn.setAttribute('type', 'button');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');
  title.setAttribute('value', todo.title);
  des.setAttribute('type', 'text');
  des.setAttribute('placeholder', 'Description');
  des.setAttribute('value', todo.description);
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('placeholder', 'Due Date');
  dueDate.setAttribute('value', todo.dueDate);
  priority.setAttribute('type', 'number');
  priority.setAttribute('placeholder', 'Priority');
  priority.setAttribute('value', todo.priority);
  form.append(title, des, dueDate, priority, btn);
  detailsScreen.appendChild(form);
  btn.addEventListener('click', function () {
    var projects = JSON.parse(localStorage.projects);
    var index = 0;
    projects.forEach(function (obj, indx) {
      if (project.name === obj.name) {
        index = indx;
        return index;
      }

      return index;
    });
    var todoIndex = 0;
    projects[index].todos.forEach(function (obj, indx) {
      if (todo.title === obj.title) {
        todoIndex = indx;
        return todoIndex;
      }

      return todoIndex;
    });
    projects[index].todos[todoIndex].title = title.value;
    projects[index].todos[todoIndex].description = des.value;
    projects[index].todos[todoIndex].dueDate = dueDate.value;
    projects[index].todos[todoIndex].priority = priority.value;
    localStorage.setItem('projects', JSON.stringify(projects));
    form.className = 'd-none';
    showTodoDetails(projects[index].todos[todoIndex], projects[index], updateTodo); // showTodos

    fun(projects[index]);
  });
};
var showTodos = function showTodos(project) {
  var todoScreen = document.getElementById('todoScreen');
  todoScreen.innerHTML = "".concat(project.name, "'s Todos <br>");
  var todosList = document.createElement('ul');
  Object.keys(project.todos).forEach(function (index) {
    var todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    var todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.className = 'deleBtn';
    todoDeleteBtn.innerHTML = '❌';
    todoItem.innerHTML = project.todos[index].title;
    todosList.append(todoItem, todoDeleteBtn);
  });
  todoScreen.innerHTML += todosList.outerHTML;
  var newAddbtn2 = document.createElement('button');
  newAddbtn2.innerHTML = '➕';
  newAddbtn2.id = 'addTodoBtn';
  todoScreen.appendChild(newAddbtn2);
  newAddbtn2.addEventListener('click', function () {
    newAddbtn2.className = 'd-none';
    addTodoFrm(project, showTodos);
  });
  var todosListeners = document.querySelectorAll('.todoItem');
  Object.keys(todosListeners).forEach(function (todoHTMLindex) {
    Object.keys(project.todos).forEach(function (todoObjindex) {
      if (todosListeners[todoHTMLindex].innerHTML === project.todos[todoObjindex].title) {
        todosListeners[todoHTMLindex].addEventListener('click', function () {
          return showTodoDetails(project.todos[todoObjindex], project, updateTodo, showTodos);
        });
      }
    });
  });
  var todoDeleteBtns = document.querySelectorAll('.deleBtn');
  var detailsScreen = document.getElementById('detailsScreen');
  todoDeleteBtns.forEach(function (todoDeleteBtn, currentIndex) {
    todoDeleteBtn.addEventListener('click', function () {
      var index = 0;
      var projects = JSON.parse(localStorage.projects);
      projects.forEach(function (obj, indx) {
        if (project.name === obj.name) {
          index = indx;
          return index;
        }

        return index;
      });
      removeTodo(index, currentIndex);
      showTodos(JSON.parse(localStorage.projects)[index]);
      detailsScreen.innerHTML = '';
    });
  });
  return todoScreen;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTodoDetails);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Project = /*#__PURE__*/function () {
  function Project(name) {
    _classCallCheck(this, Project);

    this.name = name;
    this.todos = [];
    var projects = JSON.parse(localStorage.projects);
    projects.push(this);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  _createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todoObj) {
      return this.todos.push(todoObj);
    }
  }, {
    key: "updateProject",
    value: function updateProject(newName) {
      this.name = newName;
      return this.name;
    }
  }], [{
    key: "deleteProject",
    value: function deleteProject(index) {
      var projects = JSON.parse(localStorage.projects);
      projects.splice(index, 1);
      localStorage.setItem('projects', JSON.stringify(projects));
      return projects;
    }
  }, {
    key: "displayProjects",
    value: function displayProjects(projects) {
      var projectsList = document.getElementById('projectsList');
      projectsList.innerHTML = 'Projects List: <br>';
      Object.keys(projects).forEach(function (projectIndex) {
        var projectItem = document.createElement('li');
        var projectDelBtn = document.createElement('button');
        projectDelBtn.className = 'projDelBtn';
        projectDelBtn.innerHTML = '❌';
        projectItem.className = "project".concat(projects[projectIndex].name);
        projectItem.className = 'projectItem';
        projectItem.innerHTML = projects[projectIndex].name;
        projectsList.innerHTML += projectItem.outerHTML + projectDelBtn.outerHTML;
      });
      var projectDeleteBtns = document.querySelectorAll('.projDelBtn');
      projectDeleteBtns.forEach(function (projectDeleteBtn, index) {
        projectDeleteBtn.addEventListener('click', function () {
          Project.deleteProject(index);
          Project.displayProjects(JSON.parse(localStorage.projects));
          Project.projectsEvents(JSON.parse(localStorage.projects));
          _common__WEBPACK_IMPORTED_MODULE_0__.showTodos(JSON.parse(localStorage.projects)[index]);
        });
      });
    }
  }]);

  return Project;
}();

_defineProperty(Project, "projectsEvents", function () {
  var projects = JSON.parse(localStorage.projects);
  var projectsListeners = document.querySelectorAll('.projectItem');
  Object.keys(projectsListeners).forEach(function (projectHTMLIndex) {
    Object.keys(projects).forEach(function (projectObjIndex) {
      if (projectsListeners[projectHTMLIndex].innerHTML === projects[projectObjIndex].name) {
        projectsListeners[projectHTMLIndex].addEventListener('click', function () {
          _common__WEBPACK_IMPORTED_MODULE_0__.showTodos(JSON.parse(localStorage.projects)[projectObjIndex]);
        });
      }
    });
  });
});



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

var Todo = function Todo(title, description, dueDate, priority) {
  _classCallCheck(this, Todo);

  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};



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



if (typeof localStorage.projects === 'undefined') {
  var projects = [];
  localStorage.setItem('projects', JSON.stringify(projects));

  var newDefault = function newDefault() {
    return new _project__WEBPACK_IMPORTED_MODULE_1__.default('Default');
  };

  newDefault();
  localStorage.setItem('projects', JSON.stringify(projects));
} else {
  var _projects = JSON.parse(localStorage.projects);

  localStorage.setItem('projects', JSON.stringify(_projects));
}

_app__WEBPACK_IMPORTED_MODULE_0__.appStructureCaller();
_app__WEBPACK_IMPORTED_MODULE_0__.addingProjBtn();
_project__WEBPACK_IMPORTED_MODULE_1__.default.projectsEvents();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map