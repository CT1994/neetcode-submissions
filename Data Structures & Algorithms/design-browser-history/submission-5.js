class ListNode {
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
            cur = cur.prev;
            steps--;
        }
        this.cur = cur;
        return cur.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let cur = this.cur;
        while (steps && cur.next) {
            cur = cur.next;
            steps--;
        }
        this.cur = cur;
        return cur.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
