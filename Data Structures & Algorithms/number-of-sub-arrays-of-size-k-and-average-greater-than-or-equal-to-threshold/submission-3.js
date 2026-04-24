class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        const targetSum = threshold * k;
        let currentSum = 0;
        let count = 0;

        // 1. Initialize the first window
        for (let i = 0; i < k; i++) {
            currentSum += arr[i];
        }

        if (currentSum >= targetSum) count++;

        // 2. Slide the window across the rest of the array
        // Start from the k-th element to the end
        for (let i = k; i < arr.length; i++) {
            // Add the incoming element and subtract the outgoing element
            currentSum += arr[i] - arr[i - k];

            if (currentSum >= targetSum) {
                count++;
            }
        }

        return count;
    }
}
