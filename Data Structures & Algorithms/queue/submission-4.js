class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyDeque {
    constructor() {
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const node = new ListNode(value);
        const next = this.tail;
        const prev = this.tail.prev;
        node.next = next;
        node.prev = prev;
        next.prev = node;
        prev.next = node;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new ListNode(value);
        const next = this.head.next;
        const prev = this.head;
        node.next = next;
        node.prev = prev;
        next.prev = node;
        prev.next = node;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) return -1;
        const node = this.tail.prev;
        const next = node.next;
        const prev = node.prev;
        next.prev = prev;
        prev.next = next;
        return node.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) return -1;
        const node = this.head.next;
        const next = node.next;
        const prev = node.prev;
        next.prev = prev;
        prev.next = next;
        return node.val;
    }
}
