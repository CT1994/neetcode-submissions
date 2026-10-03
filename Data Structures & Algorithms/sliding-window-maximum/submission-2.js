class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const res = [];
        const q = new Deque();
        let l = 0;
        let r = 0;
        while (r < n) {
            while (q.size() && nums[q.back()] < nums[r]) {
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
