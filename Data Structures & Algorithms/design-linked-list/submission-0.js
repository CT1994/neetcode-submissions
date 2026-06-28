class DoublyLinkNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new DoublyLinkNode(-1);
        this.tail = new DoublyLinkNode(-1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next;

        while (cur && index) {
            index--;
            cur = cur.next;
        }
        if (cur && cur !== this.tail && index === 0) {
            return cur.val;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new DoublyLinkNode(val);
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
        const node = new DoublyLinkNode(val);
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
        let cur = this.head.next;

        while (index && cur) {
            cur = cur.next;
            index--;
        }

        if (cur && index === 0) {
            const node = new DoublyLinkNode(val);
            const prev = cur.prev;
            const next = cur;
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

        if (cur && cur !== this.tail && index === 0) {
            const next = cur.next;
            const prev = cur.prev;
            next.prev = prev;
            prev.next = next;
        }
    }
}
