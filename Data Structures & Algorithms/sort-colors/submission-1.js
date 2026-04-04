class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = [0, 0, 0];

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] += 1;
        }
        console.log(count)

        let i = 0;
        for (let n = 0; n < count.length; n++) {
            for (let j = 0; j < count[n]; j++) {
                nums[i] = n;
                i++
            }
        }
    }
}
