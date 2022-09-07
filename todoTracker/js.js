var form = document.querySelector('form');
var todoList = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.getElementById('user-todo');

var listOfTodo = [];

for (var i = 0; i < todoList.children.length; i++) {
    listOfTodo.push(todoList.children[i].innerHTML);
}

var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

var storage = JSON.parse(localStorage.getItem('todos'));



form.addEventListener('submit', function(e) {
    e.preventDefault();
    todosArray.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todosArray));
    todoMaker(input.value);
    input.value = "";
});

var todoMaker = function(text) {
    var todo = document.createElement('li');
    todo.textContent = text;

    if (listOfTodo.indexOf(text) == -1) {
        todoList.appendChild(todo);
        listOfTodo.push(text);
        console.log(todoList.children.length);
    } else {
        alert("is already in");
    }
}

for (var i = 0; i < storage.length; i++) {
    todoMaker(storage[i]);
}

button.addEventListener('click', function() {
    localStorage.clear();
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
})