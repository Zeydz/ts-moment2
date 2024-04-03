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

    /* Localstorage */
    saveToLocalStorage(): void {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    loadFromLocalStorage(): void {
        const data = localStorage.getItem('todos');
        if (data) {
            this.todos = JSON.parse(data);
        }
    }
}