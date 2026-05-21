class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1)
        return nums;
    }

    mergeSort(nums, l, r) {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            this.mergeSort(nums, l, m)
            this.mergeSort(nums, m + 1, r);
            this.merge(nums, l, m, r);
        }
    }

    merge(nums, l, m, r) {
        const length1 = m - l + 1;
        const length2 = r - m;

        const L = new Array(length1);
        const R = new Array(length2);

        for (let i = 0; i < length1; i++) {
            L[i] = nums[l + i]
        }

        for (let i = 0; i < length2; i++) {
            R[i] = nums[m + 1 + i]
        }

        let i = 0;
        let j = 0;
        let k = l;

        while (i < length1 && j < length2) {
            if (L[i] <= R[j]) {
                nums[k] = L[i]
                i++
            }
            else {
                nums[k] = R[j]
                j++
            }
            k++
        }

        while (i < length1) {
            nums[k] = L[i]
            i++
            k++
        }

        while (j < length2) {
            nums[k] = R[j]
            j++
            k++
        }
    }
}
