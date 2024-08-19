// Title localStorage
const titleInputElement = document.querySelector('.input_title');

titleInputElement.addEventListener('input', (event) => {
    const titleInputValue = event.target.value;
    localStorage.setItem('titleSavedInput', titleInputValue);
});

// Check if there's a saved input
const titleSavedInput = localStorage.getItem('titleSavedInput');
if (titleSavedInput) {
    titleInputElement.value = titleSavedInput;
}


// Add a comment localStorage
const commentInputElement = document.querySelector('.input_comment');

commentInputElement.addEventListener('input', (event) => {
    const commentInputValue = event.target.value;
    localStorage.setItem('commentSavedInput', commentInputValue);
});


// Check if there's a saved input
const commentSavedInput = localStorage.getItem('commentSavedInput');
if (commentSavedInput) {
    commentInputElement.value = commentSavedInput;
}

function saveLocalTodos(todo) {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


document.addEventListener('DOMContentLoaded', getTodos);

function getTodos() {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        // Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Check mark button
        const checkBox = document.createElement('div');
        checkBox.classList.add('check-box');
        todoDiv.appendChild(checkBox);

        // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // Check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<img src="images/check.svg" alt="">';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // Check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<img src="images/delete.svg" alt="">';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // Append to list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos))
}