class LinkNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new LinkNode(-1);
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
    addAtHead(val) {
        const node = new LinkNode(val);
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
    addAtTail(val) {
        this.tail.next = new LinkNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        // (D)
        let cur = this.head;
        while (index && cur) {
            index--;
            cur = cur.next;
        }

        if (index === 0 && cur) {
            const node = new LinkNode(val);
            node.next = cur.next;
            cur.next = node;

            if (!node.next) {
                this.tail = node;
            }
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let cur = this.head;
        while (index && cur) {
            index--;
            cur = cur.next;
        }

        if (index === 0 && cur && cur.next) {
            cur.next = cur.next.next;

            if (!cur.next) {
                this.tail = cur;
            }
        }
    }
}
