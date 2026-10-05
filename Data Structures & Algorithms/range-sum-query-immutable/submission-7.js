class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = nums;
        for (let i = 1; i < this.prefix.length; i++) {
            this.prefix[i] += this.prefix[i - 1];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefix[right] - (this.prefix[left - 1] || 0);
    }
}
