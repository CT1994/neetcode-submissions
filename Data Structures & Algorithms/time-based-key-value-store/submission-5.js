class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key) || [];
        let l = 0;
        let r = arr.length - 1;
        let res = "";
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);

            if (arr[m][0] === timestamp) {
                return arr[m][1];
            }

            if (arr[m][0] < timestamp) {
                res = arr[m][1];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
