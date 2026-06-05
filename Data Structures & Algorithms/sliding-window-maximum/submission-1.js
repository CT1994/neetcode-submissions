class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const q = new Deque();
        const res = new Int16Array(n - k + 1);
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
                res[l] = nums[q.front()];
                l++;
            }
            r++;
        }

        return res;
    }
}
