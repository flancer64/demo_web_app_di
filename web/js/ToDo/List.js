export default class Demo_ToDo_List {
    /** @type {typeof Demo_ToDo_Item} */
    #TItem;
    /** @type {HTMLElement} */
    #todoListElement;
    /** @type {Demo_ToDo_Item[]} */
    #tasks = [];

    constructor(
        {
            Demo_ToDo_Item: TItem,
        }
    ) {
        this.#TItem = TItem;
        this.#todoListElement = document.getElementById('todo-list');
    }

    /**
     * @param {string} task
     */
    addTask(task) {
        const item = new this.#TItem();
        item.setName(task);
        this.#tasks.push(item);
        this.render();
    }

    render() {
        this.#todoListElement.innerHTML = '';
        this.#tasks.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.getName();
            listItem.classList.toggle('completed', item.getCompleted());

            listItem.addEventListener('click', () => {
                item.toggleComplete();
                listItem.classList.toggle('completed');
            });

            this.#todoListElement.appendChild(listItem);
        });
    }
}
