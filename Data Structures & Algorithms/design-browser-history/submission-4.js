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
        this.cur = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let cur = this.cur;

        while (steps && cur.prev) {
            steps--;
            cur = cur.prev;
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

        while (steps && cur.next) {
            steps--;
            cur = cur.next;
        }

        this.cur = cur;
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
