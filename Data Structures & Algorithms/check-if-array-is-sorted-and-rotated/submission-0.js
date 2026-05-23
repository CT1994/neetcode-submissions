class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let pivot = 0;
        let prevVal = nums[0]

        for (let i = 1; i < nums.length; i++) {
            if (prevVal > nums[i]) {
                pivot = i
                break
            }

            prevVal = nums[i]
        }

        const rotate = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            rotate[(i + nums.length - pivot) % nums.length] = nums[i]
        }

        prevVal = rotate[0]
        for (let i = 1; i < nums.length; i++) {
            if (prevVal > rotate[i]) {
                return false
            }

            prevVal = rotate[i]
        }

        return true;
    }
}
