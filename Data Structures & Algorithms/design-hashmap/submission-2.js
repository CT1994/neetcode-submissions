class ListNode {
    constructor(key = -1, value = -1, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class MyHashMap {
    constructor() {
        this.hashMap = Array.from({ length: 1000 }, () => new ListNode());
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.hashMap[key % 1000];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next.value = value;
                return;
            }
            cur = cur.next;
        }

        cur.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cur = this.hashMap[key % 1000];

        while (cur) {
            if (cur.key === key) {
                return cur.value;
            }
            cur = cur.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.hashMap[key % 1000];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
