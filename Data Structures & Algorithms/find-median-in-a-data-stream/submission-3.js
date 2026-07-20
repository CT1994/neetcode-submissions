class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue(); // Lower half
        this.large = new MinPriorityQueue(); // Upper half
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // 1. Send num through small to send the largest element over to large
        this.small.push(num);
        this.large.push(this.small.pop());

        // 2. Keep small size >= large size (small can hold 1 extra element)
        if (this.large.size() > this.small.size()) {
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