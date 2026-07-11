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
        let i = this.heap.length - 1;
        let p = Math.floor(i / 2);
        while (p >= 1 && this.heap[p] > this.heap[i]) {
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
            p = Math.floor(i / 2);
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
        const res = this.heap.pop();
        this.percolateDown(1)

        return res;
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap.length > 1 ? this.heap[1] : -1;
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
            this.percolateDown(cur)
            cur--;
        }
    }

    percolateDown(i) {
        while (i * 2 < this.heap.length) {
            const left = i * 2;
            const right = i * 2 + 1;
            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[left] &&
                this.heap[right] < this.heap[i]
            ) {
                [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                i = right;
            } else if (this.heap[left] < this.heap[i]) {
                [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                i = left;
            } else {
                break;
            }
        }
    }
}
