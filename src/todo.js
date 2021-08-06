export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };

    static updateTodo(todo, detailsScreen){
        const form = document.createElement('form');
        const title = document.createElement('input');
        const des = document.createElement('input');
        const dueDate = document.createElement('input');
        const priority = document.createElement('input');
    
        const btn = document.createElement('button');
        
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
    
    
        btn.addEventListener('click', ()=> {
            todo.title = title.value;
            todo.description = des.value;
            todo.dueDate =  dueDate.value;
            todo.priority =  priority.value;
            
            const btn = document.getElementById('editBtn');
            form.className = "d-none";
    
            Todo.showTodoDetails(todo);
        });
    } 

    static showTodoDetails(todo) { 
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
    
        const updateBtn = document.createElement("button");
        updateBtn.className = 'editBtn'
        updateBtn.innerHTML = '✏️'
    
        detailsScreen.append(title, description, dueDate, priority, updateBtn);
    
        updateBtn.addEventListener('click', ()=>{
            updateBtn.className = 'd-none'
            Todo.updateTodo(todo, detailsScreen);
        })
    }
};