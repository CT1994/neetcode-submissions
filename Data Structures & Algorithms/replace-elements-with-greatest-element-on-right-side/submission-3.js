class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const newRightMax = Math.max(rightMax, arr[i]);
            arr[i] = rightMax;
            rightMax = newRightMax;
        }

        return arr;
    }
}
