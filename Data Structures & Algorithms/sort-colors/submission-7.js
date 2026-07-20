class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Uint16Array(3).fill(0);
        for (const n of nums) {
            count[n]++;
        }

        let k = 0;
        for (let i = 0; i < 3; i++) {
            while (count[i]-- > 0) {
                nums[k++] = i;
            }
        }
        return nums;
    }
}
