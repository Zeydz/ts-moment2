/* Interface för todo */
interface Todo {
    task: string,
    completed: boolean,
    priority: number
}
/* Klass för todolist */
export class ToDoList {
    /* Skapar attribut todos och anger detta som en array som ska lagra objekt */
    private todos: Todo[];
    
    /* Initierar arrayen till en tom array, laddar in from LocalStorage */
    constructor() {
        this.todos = [];
        this.loadFromLocalStorage();
    }

    /* Lägger till i listan, if-sats kontrollerar ifall där finns något värde, om där inte finns returnerar den false.  */
    addTodo(task: string, priority: number): boolean {
        if (task.trim() === '' || priority < 1 || priority > 3) {
            return false; 
        }

        const newToDo: Todo = {
            task: task, 
            completed: false,
            priority: priority
        };

        /* Lägger till värde i todos, returnerar true (lyckat) */
        this.saveToLocalStorage();
        this.todos.push(newToDo);
        return true;
    }

    getToDos(): Todo[] {
        return this.todos;
    }
    
    /* Kod som markerar ifall rätt index är completed eller ej */
    markTodoCompleted(todoIndex: number): void {
        if (todoIndex >= 0 && todoIndex < this.todos.length) {
            this.todos[todoIndex].completed = true;
            this.saveToLocalStorage();
        }
    }
    
    /* Localstorage */
    private saveToLocalStorage(): void {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    private loadFromLocalStorage(): void {
        const data = localStorage.getItem('todos');
        if (data) {
            this.todos = JSON.parse(data);
        }
    }
}