import Todo from './todo';

const addTodoFrm = (project, fun) => {
  const todoScreen = document.getElementById('todoScreen');
  const form = document.createElement('form');
  const title = document.createElement('input');
  const des = document.createElement('input');
  const dueDate = document.createElement('input');

  const priority = document.createElement('select');
  const priority1 = document.createElement('option');
  const priority2 = document.createElement('option');
  const priority3 = document.createElement('option');

  const btn = document.createElement('button');

  btn.innerHTML = 'Create';
  btn.setAttribute('type', 'button');

  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');

  des.setAttribute('type', 'text');
  des.setAttribute('placeholder', 'Description');

  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('placeholder', 'Due Date');

  priority1.setAttribute('value', 'low');
  priority2.setAttribute('value', 'medium');
  priority3.setAttribute('value', 'high');
  priority1.innerHTML = 'Low';
  priority2.innerHTML = 'Medium';
  priority3.innerHTML = 'High';

  priority.innerHTML += priority1.outerHTML + priority2.outerHTML + priority3.outerHTML;
  form.append(title, des, dueDate, priority, btn);

  todoScreen.appendChild(form);

  btn.addEventListener('click', () => {
    const todo = new Todo(title.value, des.value, dueDate.value, priority.value);

    let index = 0;
    const projects = JSON.parse(localStorage.projects);
    projects.forEach((obj, indx) => {
      if (project.name === obj.name) {
        index = indx;
        return index;
      }
      return index;
    });

    projects[index].todos.push(todo);
    localStorage.setItem('projects', JSON.stringify(projects));

    const btn = document.getElementById('addTodoBtn');
    form.className = 'd-none';
    btn.className = 'd-block';

    // showTodos
    fun(JSON.parse(localStorage.projects)[index]);
  });

  return form;
};

const removeTodo = (index, currentIndex) => {
  const projects = JSON.parse(localStorage.projects);
  projects[index].todos.splice(currentIndex, 1);
  localStorage.setItem('projects', JSON.stringify(projects));
};

const showTodoDetails = (todo, project, fun, fun2) => {
  const detailsScreen = document.getElementById('detailsScreen');
  detailsScreen.innerHTML = '';

  const title = document.createElement('h3');
  title.innerHTML = todo.title;

  const description = document.createElement('p');
  description.innerHTML = `<b>Description: </b>${todo.description} <br>`;

  const dueDate = document.createElement('p');
  dueDate.innerHTML = `<b>Due : </b>${todo.dueDate} <br>`;

  const priority = document.createElement('p');
  priority.innerHTML = `<b>Priority : </b>${todo.priority} <br>`;

  const updateBtn = document.createElement('button');
  updateBtn.className = 'editBtn';
  updateBtn.innerHTML = '✏️';

  detailsScreen.append(title, description, dueDate, priority, updateBtn);

  updateBtn.addEventListener('click', () => {
    updateBtn.className = 'd-none';
    // updateTodo
    fun(todo, detailsScreen, project, fun2);
  });
};

export const updateTodo = (todo, detailsScreen, project, fun) => {
  const form = document.createElement('form');
  const title = document.createElement('input');
  const des = document.createElement('input');
  const dueDate = document.createElement('input');
  const priority = document.createElement('input');

  const btn = document.createElement('button');

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

  btn.addEventListener('click', () => {
    const projects = JSON.parse(localStorage.projects);

    let index = 0;
    projects.forEach((obj, indx) => {
      if (project.name === obj.name) {
        index = indx;
        return index;
      }
      return index;
    });

    let todoIndex = 0;
    projects[index].todos.forEach((obj, indx) => {
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

    showTodoDetails(projects[index].todos[todoIndex], projects[index], updateTodo);
    // showTodos
    fun(projects[index]);
  });
};

export const showTodos = (project) => {
  const todoScreen = document.getElementById('todoScreen');
  todoScreen.innerHTML = `${project.name}'s Todos <br>`;
  const todosList = document.createElement('ul');

  Object.keys(project.todos).forEach((index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.className = 'deleBtn';
    todoDeleteBtn.innerHTML = '❌';
    todoItem.innerHTML = project.todos[index].title;
    todosList.append(todoItem, todoDeleteBtn);
  });

  todoScreen.innerHTML += todosList.outerHTML;

  const newAddbtn2 = document.createElement('button');
  newAddbtn2.innerHTML = '➕';
  newAddbtn2.id = 'addTodoBtn';

  todoScreen.appendChild(newAddbtn2);

  try {
    newAddbtn2.addEventListener('click', () => {
      newAddbtn2.className = 'd-none';
      addTodoFrm(project, showTodos);
    });

    const todosListeners = document.querySelectorAll('.todoItem');

    Object.keys(todosListeners).forEach((todoHTMLindex) => {
      Object.keys(project.todos).forEach((todoObjindex) => {
        if (todosListeners[todoHTMLindex].innerHTML === project.todos[todoObjindex].title) {
          todosListeners[todoHTMLindex].addEventListener('click', () => showTodoDetails(project.todos[todoObjindex], project, updateTodo, showTodos));
        }
      });
    });

    const todoDeleteBtns = document.querySelectorAll('.deleBtn');
    const detailsScreen = document.getElementById('detailsScreen');

    todoDeleteBtns.forEach((todoDeleteBtn, currentIndex) => {
      todoDeleteBtn.addEventListener('click', () => {
        let index = 0;
        const projects = JSON.parse(localStorage.projects);
        projects.forEach((obj, indx) => {
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
  } catch (error) {
    return error;
  }

  return todoScreen;
};

export default showTodoDetails;