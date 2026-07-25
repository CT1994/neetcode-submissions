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
        if (!this.adjList[src]) this.adjList[src] = new Set();
        if (!this.adjList[dst]) this.adjList[dst] = new Set();
        this.adjList[src].add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (this.adjList[src] && this.adjList[src].has(dst)) {
            this.adjList[src].delete(dst);
            return true;
        }
        return false;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const visit = new Set();
        const dfs = (src) => {
            if (src === dst) return true;
            if (visit.has(src)) return false;

            visit.add(src)
            for (const n of this.adjList[src]) {
                if (dfs(n)) return true;
            }

            return false;
        };

        return dfs(src);
    }
}
