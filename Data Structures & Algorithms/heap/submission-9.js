class MinHeap {
    constructor() {
        this.arr = [0];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        let i = this.arr.length - 1;
        let p = Math.floor(i / 2);
        while (p > 0 && this.arr[i] < this.arr[p]) {
            [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
            i = p;
            p = Math.floor(i / 2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.arr.length === 1) return -1;
        if (this.arr.length === 2) return this.arr.pop();

        [this.arr[1], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[1]];
        const res = this.arr.pop();

        this.percolateDown(1);
        return res;
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[1] ?? -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        nums.push(nums[0]);
        this.arr = nums;
        let cur = Math.floor(this.arr.length - 1 / 2);
        while (cur > 0) {
            this.percolateDown(cur);
            cur--;
        }
    }

    percolateDown(i) {
        while (i * 2 < this.arr.length) {
            const left = i * 2;
            const right = i * 2 + 1;
            if (
                right < this.arr.length &&
                this.arr[right] < this.arr[left] &&
                this.arr[right] < this.arr[i]
            ) {
                [this.arr[i], this.arr[right]] = [this.arr[right], this.arr[i]];
                i = right;
            } else if (this.arr[left] < this.arr[i]) {
                [this.arr[i], this.arr[left]] = [this.arr[left], this.arr[i]];
                i = left;
            } else {
                break;
            }
        }
    }
}
