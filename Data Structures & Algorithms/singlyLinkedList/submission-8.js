class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next;
        let i = 0;

        while (cur) {
            if (i === index) {
                return cur.val;
            }

            cur = cur.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;
        if (!node.next) {
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let cur = this.head;
        let i = 0;
        while (i < index && cur) {
            cur = cur.next;
            i++;
        }

        if (cur && cur.next) {
            if (cur.next === this.tail) {
                this.tail = cur;
            }
            cur.next = cur.next.next;
            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let cur = this.head.next;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res;
    }
}
