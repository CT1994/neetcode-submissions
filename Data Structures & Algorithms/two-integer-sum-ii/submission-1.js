class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1;

        while (l < r) {
            const val = numbers[l] + numbers[r];
            if (val > target) {
                r--
            }
            else if (val < target) {
                l++
            }
            else {
                break;
            }
        }

        return [l + 1, r + 1]
    }
}
