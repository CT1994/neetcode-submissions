class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = [-Infinity];
        this.k = k;

        for (const n of nums) {
            this.add(n);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.push(val);
        return this.minHeap[1];
    }

    push(val) {
        this.minHeap.push(val);

        let i = this.minHeap.length - 1;
        let p = Math.floor(i / 2);
        while (p >= 1 && this.minHeap[i] < this.minHeap[p]) {
            [this.minHeap[i], this.minHeap[p]] = [this.minHeap[p], this.minHeap[i]];
            i = p;
            p = Math.floor(i / 2);
        }

        if (this.minHeap.length - 1 > this.k) {
            this.pop();
        }
    }

    pop() {
        if (this.minHeap.length === 0) return;
        if (this.minHeap.length === 1) return;

        [this.minHeap[1], this.minHeap[this.minHeap.length - 1]] = [
            this.minHeap[this.minHeap.length - 1],
            this.minHeap[1],
        ];
        this.minHeap.pop();

        let i = 1;
        while (i * 2 < this.minHeap.length) {
            const left = i * 2;
            const right = i * 2 + 1;
            if (
                right < this.minHeap.length &&
                this.minHeap[left] > this.minHeap[right] &&
                this.minHeap[right] < this.minHeap[i]
            ) {
                [this.minHeap[i], this.minHeap[right]] = [this.minHeap[right], this.minHeap[i]];
                i = right;
            } else if (this.minHeap[left] < this.minHeap[i]) {
                [this.minHeap[i], this.minHeap[left]] = [this.minHeap[left], this.minHeap[i]];
                i = left;
            } else {
                break;
            }
        }
    }
}
