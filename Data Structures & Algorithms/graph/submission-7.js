class Graph {
    constructor() {
        this.nodes = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!this.nodes.has(src)) {
            this.nodes.set(src, new Set());
        }
        this.nodes.get(src).add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (!this.nodes.has(src)) return false;
        const node = this.nodes.get(src);
        if (!node.has(dst)) return false;
        node.delete(dst);
        return true;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        return this.dfs(this.nodes.get(src), dst);
    }

    dfs(root, dst) {
        if (!root) return false;
        if (root.has(dst)) return true;

        for (const n of root) {
            if (this.dfs(this.nodes.get(n), dst)) return true;
        }

        return false;
    }
}
