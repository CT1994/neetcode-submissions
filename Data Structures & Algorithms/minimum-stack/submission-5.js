class MinStack {
    constructor() {
        this.arr = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        if (this.min.length > 0) {
            this.min.push(Math.min(this.min[this.min.length - 1], val));
        } else {
            this.min.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.arr.length === 0) return;
        this.arr.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
