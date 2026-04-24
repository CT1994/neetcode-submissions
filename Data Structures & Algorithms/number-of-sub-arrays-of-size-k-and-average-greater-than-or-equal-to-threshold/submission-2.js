class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        threshold *= k;
        let res = 0;
        let curSum = 0;

        for (let R = 0; R < arr.length; R++) {
            curSum += arr[R];
            if (R >= k - 1) {
                if (curSum >= threshold) {
                    res++
                }
                curSum -= arr[R - k + 1]
            }
        }
        return res
    }
}
