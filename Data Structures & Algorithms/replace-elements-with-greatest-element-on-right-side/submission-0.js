class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let ans = new Array(arr.length);
        ans[arr.length - 1] = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            ans[i - 1] = Math.max(arr[i], ans[i])
        }

        return ans
    }
}
