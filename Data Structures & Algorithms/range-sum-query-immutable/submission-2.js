class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const n = nums.length;
        this.prefix = new Int32Array(n + 1);
        
        for (let i = 0; i < n; i++) {
            this.prefix[i + 1] = this.prefix[i] + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefix[right + 1] - this.prefix[left];
    }
}