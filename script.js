document.getElementById('add-todo-button').addEventListener('click', addTodo);

const todos = [];

function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;
    if (title) {
        todos.push({ title: title, completed: false });
        textbox.value = '';
        render();
    }
}

function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item' + (todo.completed ? ' completed' : '');
        todoItem.innerHTML = `
            <span>${todo.title}</span>
            <button onclick="toggleComplete(${index})">Completar</button>
            <button onclick="editTodoTitle(${index})">Editar</button>
            <button onclick="deleteTodo(${index})">Eliminar</button>
        `;
        todoList.appendChild(todoItem);
    });
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function editTodoTitle(index) {
    const newTitle = prompt('Editar tarea:', todos[index].title);
    if (newTitle) {
        todos[index].title = newTitle;
        render();
    }
}