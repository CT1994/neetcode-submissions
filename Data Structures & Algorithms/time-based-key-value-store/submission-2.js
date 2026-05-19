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
        if (!this.keyStore.has(key)) {
            return "";
        }

        let result = "";
        const vals = this.keyStore.get(key);
        let l = 0;
        let r = vals.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const midTimestamp = vals[mid][0];
            const midValue = vals[mid][1];

            if (midTimestamp <= timestamp) {
                // This is a valid candidate, but there might be a larger valid one later
                result = midValue;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return result;
    }
}
