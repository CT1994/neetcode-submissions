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

        while (cur) {
            if (cur.key === key) {
                cur.value = value;
                break;
            }
            if (cur.next === null) {
                cur.next = new ListNode(key, value);
                break;
            }
            cur = cur.next;
        }
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
        let prev = null;

        while (cur) {
            // (0) -> (1)
            if (cur.key === key) {
                prev.next = cur.next;
                break;
            }
            prev = cur;
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
