class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null
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
        this.cur.next = node;
        node.prev = this.cur;
        this.cur = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let cur = this.cur;

        while (cur.prev && steps > 0) {
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

        while (cur.next && steps > 0) {
            cur = cur.next;
            steps--;
        }

        this.cur = cur;
        return this.cur.val
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
