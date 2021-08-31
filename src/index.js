import * as app from './app';
import Project from './project';
import * as common from './common';

if (typeof (localStorage.projects) === 'undefined') {
  const projects = [];
  localStorage.setItem('projects', JSON.stringify(projects));
  const newDefault = () => Project.saveToLocal(new Project('Default'));
  newDefault();
  localStorage.setItem('projects', JSON.stringify(projects));
} else {
  const projects = JSON.parse(localStorage.projects);
  localStorage.setItem('projects', JSON.stringify(projects));
}

app.appStructureCaller();
app.addingProjBtn();

const projects = JSON.parse(localStorage.projects);
const projectsListeners = document.querySelectorAll('.projectItem');

Object.keys(projectsListeners).forEach((projectHTMLIndex) => {
  Object.keys(projects).forEach((projectObjIndex) => {
    if (projectsListeners[projectHTMLIndex].innerHTML === projects[projectObjIndex].name) {
      projectsListeners[projectHTMLIndex].addEventListener('click', () => {
        common.showTodos(JSON.parse(localStorage.projects)[projectObjIndex]);
      });
    }
  });
});

const projectDeleteBtns = document.querySelectorAll('.projDelBtn');

projectDeleteBtns.forEach((projectDeleteBtn, index) => {
  projectDeleteBtn.addEventListener('click', () => {
    Project.deleteProject(index);
    Project.displayProjects(JSON.parse(localStorage.projects));
    Project.projectsEvents(JSON.parse(localStorage.projects));
    common.showTodos(JSON.parse(localStorage.projects)[index]);
  });
});

// btn.addEventListener('click', () => {
//   const todo = new Todo(title.vaslue, des.value, dueDate.value, priority.value);

//   let index = 0;
//   const projects = JSON.parse(localStorage.projects);
//   projects.forEach((obj, indx) => {
//     if (project.name === obj.name) {
//       index = indx;
//       return index;
//     }
//     return index;
//   });

//   projects[index].todos.push(todo);
//   localStorage.setItem('projects', JSON.stringify(projects));

//   const btn = document.getElementById('addTodoBtn');
//   form.className = 'd-none';
//   btn.className = 'd-block';

//   // showTodos
//   fun(JSON.parse(localStorage.projects)[index]);
// });

// btn.addEventListener('click', () => {
//   const projects = JSON.parse(localStorage.projects);

//   let index = 0;
//   projects.forEach((obj, indx) => {
//     if (project.name === obj.name) {
//       index = indx;
//       return index;
//     }
//     return index;
//   });

//   let todoIndex = 0;
//   projects[index].todos.forEach((obj, indx) => {
//     if (todo.title === obj.title) {
//       todoIndex = indx;
//       return todoIndex;
//     }
//     return todoIndex;
//   });

//   projects[index].todos[todoIndex].title = title.value;
//   projects[index].todos[todoIndex].description = des.value;
//   projects[index].todos[todoIndex].dueDate = dueDate.value;
//   projects[index].todos[todoIndex].priority = priority.value;

//   localStorage.setItem('projects', JSON.stringify(projects));
//   form.className = 'd-none';

//   showTodoDetails(projects[index].todos[todoIndex], projects[index], updateTodo);
//   // showTodos
//   fun(projects[index]);
// });

// newAddbtn2.addEventListener('click', () => {
//   newAddbtn2.className = 'd-none';
//   addTodoFrm(project, showTodos);
// });

// const todosListeners = document.querySelectorAll('.todoItem');

// Object.keys(todosListeners).forEach((todoHTMLindex) => {
//   Object.keys(project.todos).forEach((todoObjindex) => {
//     if (todosListeners[todoHTMLindex].innerHTML === project.todos[todoObjindex].title) {
//       todosListeners[todoHTMLindex].addEventListener(
//       'click', () => showTodoDetails(project.todos[todoObjindex], project, updateTodo, showTodos)
//       );
//     }
//   });
// });

// const todoDeleteBtns = document.querySelectorAll('.deleBtn');
// const detailsScreen = document.getElementById('detailsScreen');

// todoDeleteBtns.forEach((todoDeleteBtn, currentIndex) => {
//   todoDeleteBtn.addEventListener('click', () => {
//     let index = 0;
//     const projects = JSON.parse(localStorage.projects);
//     projects.forEach((obj, indx) => {
//       if (project.name === obj.name) {
//         index = indx;
//         return index;
//       }
//       return index;
//     });

//     removeTodo(index, currentIndex);
//     showTodos(JSON.parse(localStorage.projects)[index]);
//     detailsScreen.innerHTML = '';
//   });
// });

// updateBtn.addEventListener('click', () => {
//   updateBtn.className = 'd-none';
//   // updateTodo
//   fun(todo, detailsScreen, project, fun2);
// });


// app:addProjFrm
// try {
//   btn.addEventListener('click', () => {
//     const project = () => Project.saveToLocal(new Project(input.value));
//     project();

//     const btn = document.getElementById('addProjBtn');
//     form.className = 'd-none';
//     btn.className = 'd-block';

//     Project.displayProjects(JSON.parse(localStorage.projects));
//     Project.projectsEvents(JSON.parse(localStorage.projects));
//   });
// } catch (error) {
//   return error;
// }


// app: addingProjBtn
// newAddbtn.addEventListener('click', () => {
//   newAddbtn.className = 'd-none';
//   addProjFrm();
// });