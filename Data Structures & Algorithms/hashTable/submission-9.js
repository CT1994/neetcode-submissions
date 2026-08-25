class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(this.capacity).fill(null);
    }

    /**
     * @param {number} key
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
            if (!this.arr[idx]) {
                this.arr[idx] = { key, value };
                this.size++;
                if (this.size >= this.capacity / 2) {
                    this.resize();
                }
                break;
            } else if (this.arr[idx].key === key) {
                this.arr[idx].value = value;
                break;
            }
            idx = (idx + 1) % this.capacity;
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let idx = this.hash(key);

        while (this.arr[idx]) {
            if (this.arr[idx].key === key) {
                return this.arr[idx].value;
            }
            idx = (idx + 1) % this.capacity;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let idx = this.hash(key);

        while (this.arr[idx]) {
            if (this.arr[idx].key === key) {
                this.arr[idx] = null;
                this.size--;
                return true;
            }
            idx = (idx + 1) % this.capacity;
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
        const oldArr = this.arr;
        this.capacity *= 2;
        this.size = 0;
        this.arr = new Array(this.capacity).fill(null);

        for (const item of oldArr) {
            if (item) {
                this.insert(item.key, item.value);
            }
        }
    }
}
