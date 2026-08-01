class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            const val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else if (this.capacity === this.map.size) {
            this.map.delete(this.map.keys().next().value);
        }

        this.map.set(key, value);
    }
}
