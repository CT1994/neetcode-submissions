class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.tail = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;

        let cur = this.head.next;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        if (node.next === null) {
            this.tail = node;
        }
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.size) return false;

        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }

        if (cur.next === this.tail) {
            this.tail = cur;
        }
        cur.next = cur.next.next;
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = new Array(this.size);
        let cur = this.head.next;
        let i = 0;
        while (cur) {
            res[i++] = cur.val;
            cur = cur.next;
        }
        return res;
    }
}
