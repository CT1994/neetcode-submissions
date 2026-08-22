class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let largest = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const nextLargest = Math.max(largest, arr[i]);
            arr[i] = largest;
            largest = nextLargest;
        }

        return arr;
    }
}
