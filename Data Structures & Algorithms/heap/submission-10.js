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
        let cur = this.heap.length - 1;
        let par = Math.floor(cur / 2);
        while (par > 0 && this.heap[cur] < this.heap[par]) {
            [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            cur = par;
            par = Math.floor(cur / 2);
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
        let val = this.heap.pop();
        this.percolateDown(1);

        return val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap.length === 1 ? -1 : this.heap[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        nums.push(nums[0]);
        this.heap = nums;

        let cur = this.heap.length;
        while (cur > 0) {
            this.percolateDown(cur);
            cur--;
        }
    }

    percolateDown(cur) {
        while (cur * 2 < this.heap.length) {
            let left = cur * 2;
            let right = left + 1;

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
