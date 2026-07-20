class Node {
    constructor(total, L, R) {
        this.sum = total;
        this.left = null;
        this.right = null;
        this.L = L;
        this.R = R;
    }
}

class SegmentTree {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.root = this.build(nums, 0, nums.length - 1);
    }

    build(nums, L, R) {
        if (L === R) {
            return new Node(nums[L], L, R);
        }

        const M = Math.floor((L + R) / 2);
        const root = new Node(0, L, R);
        root.left = this.build(nums, L, M);
        root.right = this.build(nums, M + 1, R);
        root.sum = root.left.sum + root.right.sum;
        return root;
    }

    /**
     * @param {number} index
     * @param {number} val
     */
    update(index, val) {
        this.updateHelper(this.root, index, val);
    }

    updateHelper(root, index, val) {
        if (root.L === root.R) {
            root.sum = val;
            return;
        }

        const M = Math.floor((root.L + root.R) / 2);
        if (index > M) {
            this.updateHelper(root.right, index, val);
        } else {
            this.updateHelper(root.left, index, val);
        }

        root.sum = root.left.sum + root.right.sum;
    }

    /**
     * @param {number} L
     * @param {number} R
     * @returns {number}
     */
    query(L, R) {
        return this.queryHelper(this.root, L, R);
    }

    queryHelper(root, L, R) {
        if (root.L === L && root.R === R) {
            return root.sum;
        }

        const M = Math.floor((root.L + root.R) / 2);
        if (L > M) {
            return this.queryHelper(root.right, L, R);
        } else if (R <= M) {
            return this.queryHelper(root.left, L, R);
        } else {
            return this.queryHelper(root.left, L, M) + this.queryHelper(root.right, M + 1, R);
        }
    }
}
