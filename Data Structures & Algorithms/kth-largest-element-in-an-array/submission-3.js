class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new PriorityQueue((a, b) => b - a, nums);
        while (k > 1) {
            maxHeap.pop();
            k--;
        }
        return maxHeap.front();
    }
}
