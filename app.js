//selectors
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementsByClassName('todo-list');

//listeners
todoButton[0].addEventListener('click', addTodo);

//functions
function addTodo(event) {
    event.preventDefault();
    console.log('hello')
    
    //créer todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //créer le li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
}