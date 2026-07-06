class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next;

        while (index && cur) {
            cur = cur.next;
            index--;
        }

        if (index === 0 && cur && cur.next) {
            return cur.val;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new ListNode(val);
        const prev = this.head;
        const next = this.head.next;
        node.prev = prev;
        node.next = next;
        prev.next = node;
        next.prev = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new ListNode(val);
        const prev = this.tail.prev;
        const next = this.tail;
        node.prev = prev;
        node.next = next;
        prev.next = node;
        next.prev = node;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        let cur = this.head;

        while (index && cur) {
            cur = cur.next;
            index--;
        }

        if (index === 0 && cur && cur.next) {
            const node = new ListNode(val);
            const prev = cur;
            const next = cur.next;
            node.prev = prev;
            node.next = next;
            prev.next = node;
            next.prev = node;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let cur = this.head.next;

        while (index && cur) {
            cur = cur.next;
            index--;
        }

        if (index === 0 && cur && cur.next) {
            const prev = cur.prev;
            const next = cur.next;
            prev.next = next;
            next.prev = prev;
        }
    }
}
