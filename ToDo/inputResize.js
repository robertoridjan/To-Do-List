// Auto Resize Title Input
const inputTitle = document.querySelector('.input_title');

inputTitle.addEventListener('keyup', e => {
    inputTitle.style.height = "auto";

    let inputTitleHeight = e.target.scrollHeight;
    inputTitle.style.height = `${inputTitleHeight}px`;
});

inputTitle.addEventListener('input', () => {
    autoResizeTitle();
});

function autoResizeTitle() {
    inputTitle.style.height = 'auto';
    inputTitle.style.height = (inputTitle.scrollHeight) + 'px';
}

window.addEventListener('load', autoResizeTitle);


// Auto Resize Comment Input
const inputComment = document.querySelector('.input_comment');
inputComment.addEventListener('keyup', e => {
    inputComment.style.height = "auto";

    let inputTitleHeight = e.target.scrollHeight;
    inputComment.style.height = `${inputTitleHeight}px`;
});

inputComment.addEventListener('input', () => {
    autoResizeComment();
});

function autoResizeComment() {
    inputComment.style.height = 'auto';
    inputComment.style.height = (inputComment.scrollHeight) + 'px';
}

window.addEventListener('load', autoResizeComment);


// Auto Resize Todo Input
const inputTodo = document.querySelector('.todo-input');

inputTodo.addEventListener('keyup', e => {
    inputTodo.style.height = "20px";

    let inputTodoHeight = e.target.scrollHeight;
    inputTodo.style.height = `${inputTodoHeight}px`;
});