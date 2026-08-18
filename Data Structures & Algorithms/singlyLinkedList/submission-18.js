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
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next;
        while (index && cur) {
            index--;
            cur = cur.next;
        }

        if (index === 0 && cur) {
            return cur.val;
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
        while (index && cur) {
            index--;
            cur = cur.next;
        }

        if (index === 0 && cur && cur.next) {
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
        const vals = [];
        let cur = this.head.next;
        while (cur) {
            vals.push(cur.val);
            cur = cur.next;
        }
        return vals;
    }
}
