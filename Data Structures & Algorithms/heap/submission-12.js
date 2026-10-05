class MinHeap {
    constructor() {
        this.heap = [0];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        let c = this.heap.length - 1;
        let p = Math.floor(c / 2);
        while (p > 0 && this.heap[c] < this.heap[p]) {
            [this.heap[p], this.heap[c]] = [this.heap[c], this.heap[p]];
            c = p;
            p = Math.floor(c / 2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length === 1) return -1;
        if (this.heap.length === 2) return this.heap.pop();

        [this.heap[1], this.heap[this.heap.length - 1]] = [
            this.heap[this.heap.length - 1],
            this.heap[1],
        ];
        const val = this.heap.pop();
        this.percolateDown(1);

        return val;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.heap.length === 1) return -1;
        return this.heap[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        nums.push(nums[0]);
        this.heap = nums;

        let cur = Math.floor(this.heap.length / 2);
        while (cur > 0) {
            this.percolateDown(cur);
            cur--;
        }
    }

    percolateDown(cur) {
        while (cur * 2 < this.heap.length) {
            const left = cur * 2;
            const right = cur * 2 + 1;

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[left] &&
                this.heap[right] < this.heap[cur]
            ) {
                [this.heap[right], this.heap[cur]] = [this.heap[cur], this.heap[right]];
                cur = right;
            } else if (this.heap[left] < this.heap[cur]) {
                [this.heap[left], this.heap[cur]] = [this.heap[cur], this.heap[left]];
                cur = left;
            } else {
                break;
            }
        }
    }
}
