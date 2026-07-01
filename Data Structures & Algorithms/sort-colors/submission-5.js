class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucket = new Uint16Array(3);

        for (let n of nums) {
            bucket[n]++
        }

        let k = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < bucket[i]; j++) {
                nums[k] = i;
                k++
            }
        }
    }
}
