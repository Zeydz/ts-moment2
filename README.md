# ToDo-lista i TypeScript

Detta moment visar hur jag har implementerat en ToDo-lista skriven i TypeScript. Momentet består av två filer:

1. **main.ts**: Den här filen innehåller klassen `ToDoList` som hanterar logiken för att lägga till, ta bort och markera uppgifter som klara.
2. **dom.ts**: Denna filen innehåller kod för att kunna skriva ut resultatet av `main.ts` till DOM. 

## Funktioner / kod

### main.ts

- `ToDoList`: En klass för att hantera uppgifterna i listan. Den innehåller följande metoder:
  - `addTodo`: Lägger till en ny uppgift i listan.
  - `getToDos`: Returnerar en array med alla uppgifter i listan.
  - `clearAllTodos`: Tar bort alla uppgifter från listan.
  - `markTodoCompleted`: Markerar en uppgift som klar baserat på dess index.
  - `saveToLocalStorage`: Sparar uppgifterna till webbläsarens lokal lagring.
  - `loadFromLocalStorage`: Laddar datan från webbläsarens localstorage vid start.

### dom.ts

- `showTodos`: Uppdaterar gränssnittet för att visa alla uppgifter i listan och lägger till möjligheten att markera en uppgift som klar.
- Eventlisteners som lyssnar:
  - `submit`: Lägger till en ny uppgift när användaren skickar formuläret.
  - `click` på "Markera som klar"-knappen: Markerar en uppgift som klar när användaren klickar på knappen.
  - `click` på "Ta bort lista"-knappen: Tar bort alla uppgifter från listan när användaren klickar på knappen.
