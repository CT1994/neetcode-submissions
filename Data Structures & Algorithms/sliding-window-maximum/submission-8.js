class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const q = new Deque();
        let l = 0;
        for (let r = 0; r < nums.length; r++) {
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
        }
        return res;
    }
}
