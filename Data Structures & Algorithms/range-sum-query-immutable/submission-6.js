class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefix[i] = (this.prefix[i - 1] || 0) + nums[i];
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
