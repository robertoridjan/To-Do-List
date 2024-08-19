const filterOption = document.querySelector('.filter-todo');

filterOption.addEventListener('click', filterTodo);

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
        }
    });
}

const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(button => {
    button.addEventListener('click', function () {
        filterBtns.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    });
});