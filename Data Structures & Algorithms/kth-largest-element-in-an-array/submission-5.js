class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new PriorityQueue((a, b) => b - a, nums);
        let res = 0;
        while (k) {
            res = maxHeap.pop();
            k--;
        }
        return res;
    }
}
