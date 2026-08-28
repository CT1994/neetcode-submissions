class ListNode {
    /**
     * @constructor
     * @param {string} val
     */
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.cur = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const node = new ListNode(url);
        const prev = this.cur;
        node.prev = prev;
        prev.next = node;
        this.cur = this.cur.next;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps && this.cur && this.cur.prev) {
            steps--;
            this.cur = this.cur.prev;
        }
        return this.cur.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps && this.cur && this.cur.next) {
            steps--;
            this.cur = this.cur.next;
        }
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
