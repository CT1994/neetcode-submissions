class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity).fill(null);
    }

    hash(key) {
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let index = this.hash(key);

        while (true) {
            if (!this.table[index]) {
                this.table[index] = { key, value };
                this.size++;
                if (this.size >= this.capacity / 2) {
                    this.resize();
                }
                break;
            } else if (this.table[index].key === key) {
                this.table[index].value = value;
                break;
            }

            index = (index + 1) % this.capacity;
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let index = this.hash(key);

        while (this.table[index]) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.capacity;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let index = this.hash(key);

        while (this.table[index]) {
            if (this.table[index].key === key) {
                this.size--;
                this.table[index] = null;
                return true;
            }
            index = (index + 1) % this.capacity;
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
        const oldTable = this.table;
        this.capacity *= 2;
        this.size = 0;
        this.table = new Array(this.capacity).fill(null);
        for (const val of oldTable) {
            if (val) this.insert(val.key, val.value);
        }
    }
}
