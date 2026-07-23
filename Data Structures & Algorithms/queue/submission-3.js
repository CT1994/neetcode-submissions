class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyDeque {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
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
        const prev = this.tail.prev;
        const next = this.tail;
        node.prev = prev;
        node.next = next;
        prev.next = node;
        next.prev = node;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new ListNode(value);
        const prev = this.head;
        const next = this.head.next;
        node.prev = prev;
        node.next = next;
        prev.next = node;
        next.prev = node;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) return -1;
        const node = this.tail.prev;
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        return node.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) return -1;
        const node = this.head.next;
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        return node.val;
    }
}
