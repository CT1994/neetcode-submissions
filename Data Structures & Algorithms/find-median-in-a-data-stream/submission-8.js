class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.large = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.small.push(num);
        this.large.push(this.small.pop());
        if (this.small.size() < this.large.size()) {
            this.small.push(this.large.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        }

        return (this.small.front() + this.large.front()) / 2;
    }
}
