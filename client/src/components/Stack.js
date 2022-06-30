export default class Stack {
    constructor() {
        this.items = [];
    }

    add = item => this.items.push(item)

    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    peek = () => this.isEmpty() ? null : this.items[this.size() - 1]

    size = () => this.items.length

    isEmpty = () => this.size() === 0

    clear = () => this.items = [];

}