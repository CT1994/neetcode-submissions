class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new PriorityQueue((a, b) => b - a, nums);
        let res = maxHeap.pop();
        while (k > 1) {
            res = maxHeap.pop();
            k--;
        }
        return res;
    }
}
