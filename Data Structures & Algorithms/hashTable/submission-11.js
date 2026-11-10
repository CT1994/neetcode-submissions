class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Array(this.capacity).fill(null);
        this.size = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let idx = this.hash(key);

        while (true) {
            if (!this.map[idx]) {
                this.map[idx] = { key, value };
                this.size++;
                if (this.size >= Math.floor(this.capacity / 2)) {
                    this.resize();
                }
                break;
            } else if (this.map[idx].key === key) {
                this.map[idx] = { key, value };
                break;
            }

            idx = this.hash(idx + 1);
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let idx = this.hash(key);

        while (this.map[idx]) {
            if (this.map[idx].key === key) {
                return this.map[idx].value;
            }
            idx = this.hash(idx + 1);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let idx = this.hash(key);

        while (this.map[idx]) {
            if (this.map[idx].key === key) {
                this.map[idx] = null;
                this.size--;
                return true;
            }
            idx = this.hash(idx + 1);
        }
        return false;
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

    /**
     * @return {void}
     */
    resize() {
        this.capacity *= 2;
        const oldMap = this.map;
        this.size = 0;
        this.map = new Array(this.capacity).fill(null);
        for (const item of oldMap) {
            if (item) {
                this.insert(item.key, item.value);
            }
        }
    }
}
