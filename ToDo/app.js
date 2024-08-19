// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const clearAll = document.querySelector('.clearAll-btn');

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
clearAll.addEventListener('click', clearAllBtn);

// Button disable empty input value
function emptyInputValue() {
    if(document.querySelector(".todo-input").value.length > 0) {
        document.querySelector('.todo-button').disabled = false;
        document.querySelector('.todo-button').style.opacity = "1";
    } else { 
        document.querySelector('.todo-button').disabled = true;
        document.querySelector('.todo-button').style.opacity = "0.5";
    }
}

// Functions
function addTodo(event) {
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Check mark button
    const checkBox = document.createElement('div');
    checkBox.classList.add('check-box');
    todoDiv.appendChild(checkBox);

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Add todo to localstorage
    saveLocalTodos(todoInput.value);

    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<img src="images/check.svg" alt="">';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '  <img src="images/delete.svg" alt="">';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear todo input value
    todoInput.value = "";
    todoButton.disabled = true;
    document.querySelector('.todo-button').style.opacity = "0.5";
    todoInput.style.height = "28px";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        
        // Fall animation
        todo.classList.add('fall');

        // Remove
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Check mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// Clear all list items button
function clearAllBtn() {
    const todoList = document.querySelector('.todo-list');
    const divElements = todoList.querySelectorAll('div');
    
    divElements.forEach(function(div) {
        div.remove();
    });

    localStorage.removeItem('todos');
}