import { ToDoList } from './main';

/* Skapar en ny ToDoList */
const newToDoList = new ToDoList();

/* Ta fram elementen som ska användas */
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const taskInput = document.getElementById('task') as HTMLInputElement;
const priorityInput = document.getElementById('priority') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const markCompletedButton = document.getElementById('mark-completed') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

/* Funktion för att visa data */
function showTodos(): void {
    todoList.innerHTML = '';
    /* Kallar på "getToDos" och får returnerat värde tillbaka.  */
    newToDoList.getToDos().forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = `${todo.task} - Prioritet: ${todo.priority}`;
        if (todo.completed) {
            todoItem.style.textDecoration = 'line-through';
        }

        todoList.appendChild(todoItem);
    })
}
/* Eventlistener för formuläret, skapar en ny "todo" */
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);
    if (newToDoList.addTodo(task, priority)) {
        taskInput.value = '';
        showTodos();
    } else {
        alert('Var snäll och uppge rätt format')
    }
});

/* Markera klar knappen */
markCompletedButton.addEventListener('click', () => {
    newToDoList.getToDos().forEach((todo, index) => {
        if (!todo.completed) {
            newToDoList.markTodoCompleted(index);
        }
    });
    showTodos();
})
showTodos();