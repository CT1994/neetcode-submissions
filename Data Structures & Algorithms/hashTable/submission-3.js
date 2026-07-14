class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = new Array(capacity).fill(null);
    }

    /**
     * @param {number}
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
        let index = this.hash(key);

        while (true) {
            if (!this.map[index]) {
                this.map[index] = { key, value };
                this.size++;
                if (this.size >= this.capacity / 2) {
                    this.resize();
                }
                break;
            } else if (this.map[index].key === key) {
                this.map[index].value = value;
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

        while (this.map[index]) {
            if (this.map[index].key === key) {
                return this.map[index].value;
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

        while (this.map[index]) {
            if (this.map[index].key === key) {
                this.size--;
                this.map[index] = null;
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
        const oldMap = this.map;
        this.capacity *= 2;
        this.size = 0;
        this.map = new Array(this.capacity).fill(null);

        for (let i = 0; i < oldMap.length; i++) {
            if (oldMap[i]) {
                this.insert(oldMap[i].key, oldMap[i].value);
            }
        }
    }
}
