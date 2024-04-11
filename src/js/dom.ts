import { ToDoList } from './main';

/* Skapar en ny ToDoList */
const newToDoList = new ToDoList();

/* Ta fram elementen som ska användas */
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const taskInput = document.getElementById('task') as HTMLInputElement;
const priorityInput = document.getElementById('priority') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

/* Funktion för att visa data */
function showTodos(): void {
    todoList.innerHTML = '';
    /* Kallar på "getToDos" och får returnerat värde tillbaka.  */
    newToDoList.getToDos().forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `<strong>Uppgift: </strong>${todo.task}<br><strong>Prioritet: </strong> ${todo.priority}<br>`;
        
        const markAsCompletedButton = document.createElement('button');
        markAsCompletedButton.className = 'donebutton'
        markAsCompletedButton.textContent = 'Markera som klar';
        markAsCompletedButton.addEventListener('click', () => {
            newToDoList.markTodoCompleted(index);
            showTodos(); 
        });

        if (todo.completed) {
            todoItem.style.textDecoration = 'line-through';
        }

        todoList.appendChild(todoItem);
        todoItem.appendChild(markAsCompletedButton);
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

/* Ta bort lista knapp, kallar clearAllTodos funktion */
resetButton.addEventListener('click', () => {
    newToDoList.clearAllTodos();
    showTodos();
})

showTodos();