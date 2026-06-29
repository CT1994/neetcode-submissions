class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        // (H) <-> (T)
        this.cur = new ListNode(homepage);
        this.tail = new ListNode("");
        this.cur.next = this.tail;
        this.tail.prev = this.cur;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        // (H) <-> (T)
        // (H) <-> (N) <-> (T)
        const node = new ListNode(url);
        const prev = this.cur;
        const next = this.tail;
        node.prev = prev;
        node.next = next;
        prev.next = node;
        next.prev = node;
        this.cur = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let cur = this.cur;

        while (steps > 0 && cur.prev) {
            cur = cur.prev;
            steps--;
        }

        this.cur = cur;
        return this.cur.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let cur = this.cur;

        while (steps > 0 && cur.next) {
            cur = cur.next;
            steps--;
        }

        this.cur = cur === this.tail ? this.tail.prev : cur;
        return this.cur.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
