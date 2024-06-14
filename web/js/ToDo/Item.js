export default class Demo_ToDo_Item {

    /** @type {boolean} */
    #completed = false;
    /** @type {string} */
    #task;

    getCompleted() {
        return this.#completed;
    }

    getName() {
        return this.#task;
    }

    setName(name) {
        this.#task = name;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}
