class Graph {
    constructor() {
        this.map = {};
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!this.map[src]) {
            this.map[src] = new Set();
        }
        if (!this.map[dst]) {
            this.map[dst] = new Set();
        }

        this.map[src].add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (!this.map[src]) {
            return false;
        }

        if (!this.map[src].has(dst)) {
            return false;
        }

        this.map[src].delete(dst);
        return true;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        return this.hasPathBFS(src, dst);
    }

    hasPathBFS(src, dst) {
        const visited = new Set();
        const queue = new Queue();
        queue.push(src);
        while (!queue.isEmpty()) {
            const curr = queue.pop();
            if (curr === dst) {
                return true;
            }

            visited.add(curr);
            for (const n of this.map[curr]) {
                if (!visited.has(n)) {
                    queue.push(n);
                    visited.add(n);
                }
            }
        }
        return false;
    }
}
