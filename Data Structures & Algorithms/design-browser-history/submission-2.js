class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.cur = 0;
        this.n = 1;
        this.history = [homepage];
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.cur++
        if (this.cur === this.history.length) {
            this.history.push(url);
            this.n++;
        }
        else {
            this.history[this.cur] = url;
            this.n = this.cur + 1;
        }
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.cur = Math.max(0, this.cur - steps);
        return this.history[this.cur];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.cur = Math.min(this.n - 1, this.cur + steps);
        return this.history[this.cur];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
