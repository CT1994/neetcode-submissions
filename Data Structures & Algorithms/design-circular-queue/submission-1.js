class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.size = k;
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false;
        this.size--;

        const node = new ListNode(value);
        const prev = this.tail.prev;
        const next = this.tail
        node.prev = prev;
        node.next = next;
        prev.next = node;
        next.prev = node;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) return false;
        
        this.size++;
        const node = this.head.next;
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.isEmpty()) return -1;
        return this.head.next.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.isEmpty()) return -1;
        return this.tail.prev.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head.next === this.tail;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === 0;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
