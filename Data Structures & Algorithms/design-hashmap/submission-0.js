class MyHashMap {
    constructor() {
        this.hashMap = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.hashMap[key] = value
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.hashMap[key]
        if (value !== undefined) {
            return value
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.hashMap[key] = undefined
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
