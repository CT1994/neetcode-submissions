class Graph {
    constructor() {
        this.adjList = {};
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!this.adjList[src]) {
            this.adjList[src] = new Set();
        }

        if (!this.adjList[dst]) {
            this.adjList[dst] = new Set();
        }

        this.adjList[src].add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (!this.adjList[src] || !this.adjList[src].has(dst)) {
            return false;
        }

        this.adjList[src].delete(dst);
        return true;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        return this._dfs(src, dst, new Set());
    }

    _dfs(src, dst, visited) {
        if (src === dst) {
            return true;
        }
        visited.add(src);
        for (const n of this.adjList[src]) {
            if (!visited.has(n)) {
                if (this._dfs(n, dst, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
}
