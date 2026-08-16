class TreeNode {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.left = null;
        this.right = null;
    }
}

class MyCalendar {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
        if (!this.root) {
            this.root = new TreeNode(startTime, endTime);
            return true;
        }
        return this.insert(this.root, startTime, endTime);
    }

    insert(node, start, end) {
        if (end <= node.start) {
            if (!node.left) {
                node.left = new TreeNode(start, end);
                return true;
            }
            return this.insert(node.left, start, end);
        }

        if (start >= node.end) {
            if (!node.right) {
                node.right = new TreeNode(start, end);
                return true;
            }
            return this.insert(node.right, start, end);
        }
        return false;
    }
}
