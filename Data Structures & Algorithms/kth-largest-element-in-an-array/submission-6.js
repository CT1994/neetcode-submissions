class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new PriorityQueue((a, b) => b - a, nums);
        let res = -1;
        while (!maxHeap.isEmpty() && k > 0) {
            res = maxHeap.pop();
            k--;
        }
        return res;
    }
}
