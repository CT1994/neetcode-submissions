class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(this.capacity).fill(0);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) this.resize();
        this.arr[this.size++] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.arr[--this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const arr = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.size; i++) {
            arr[i] = this.arr[i];
        }
        this.arr = arr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
