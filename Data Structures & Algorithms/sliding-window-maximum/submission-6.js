class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let q = new Deque();
        let l = 0;
        let r = 0;
        while (r < nums.length) {
            while (!q.isEmpty() && nums[q.back()] < nums[r]) {
                q.popBack();
            }
            q.pushBack(r);
            if (l > q.front()) {
                q.popFront();
            }

            if (r + 1 >= k) {
                res.push(nums[q.front()]);
                l++;
            }
            r++;
        }
        return res;
    }
}
