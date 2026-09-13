class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const arr = new Array(3).fill(0);
        for (const n of nums) {
            arr[n]++;
        }

        let k = 0;
        for (let i = 0; i < 3; i++) {
            while (arr[i]) {
                nums[k++] = i;
                arr[i]--;
            }
        }
    }
}
