class MyStack {
    constructor() {
        this.queue = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
        for (let i = 0; i < this.queue.size() - 1; i++) {
            this.queue.push(this.queue.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.queue.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
