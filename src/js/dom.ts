import { ToDoList } from './main';

/* Skapar en ny ToDoList */
const newToDoList = new ToDoList();

/* Ta fram elementen som ska användas */
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const taskInput = document.getElementById('task') as HTMLInputElement;
const priorityInput = document.getElementById('priority') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const markCompletedButton = document.getElementById('mark-completed') as HTMLButtonElement;

function showTodos(): void {
    todoList.innerHTML = '';
    newToDoList.getToDos().forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = `${todo.task} - Prioritet: ${todo.priority}`;
        if (todo.completed) {
            todoItem.style.textDecoration = 'line-through';
        }
        todoItem.addEventListener('click', () => {
            newToDoList.markTodoCompleted(index);
            showTodos();
        })
        todoList.appendChild(todoItem);
    })
}
/* Evenetlistener för formuläret */
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value;
    console.log(task)
    const priority = parseInt(priorityInput.value);
    if (newToDoList.addTodo(task, priority)) {
        taskInput.value = '';
        showTodos();
    } else {
        alert('Var snäll och uppge rätt format')
    }

})



showTodos();