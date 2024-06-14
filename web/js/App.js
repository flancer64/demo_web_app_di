/**
 * The app binds event handlers to HTML elements.
 */
export default class Demo_App {
    /** @type {typeof Demo_Defs} */
    #DEFS;
    /** @type {Demo_ToDo_List} */
    #todoList;

    /**
     * Inject dependencies on construction.
     * @param {typeof Demo_Defs} defs
     * @param {Demo_ToDo_List} list
     */
    constructor(
        {
            Demo_Defs$: defs,
            Demo_ToDo_List$: list,
        }
    ) {
        this.#DEFS = defs;
        this.#todoList = list;
    }

    run() {
        // add the "onClick" event to the add button
        document.getElementById(this.#DEFS.ID_BTN).addEventListener('click', () => {
            const newTodoInput = document.getElementById(this.#DEFS.ID_NEW);
            const task = newTodoInput.value.trim();
            if (task) {
                this.#todoList.addTask(task);
                newTodoInput.value = '';
            }
        });

        // add the "onEnter" handler to the input field
        document.getElementById(this.#DEFS.ID_NEW).addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById(this.#DEFS.ID_BTN).click();
            }
        });

    }
}

