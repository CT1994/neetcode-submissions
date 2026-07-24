/**
 * const PriorityQueue = require('priority-queue-js');
 */

class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n);
        this.numComponents = n;
    }

    find(x) {
        if (x === this.par[x]) return x;
        return (this.par[x] = this.find(this.par[x]));
    }

    union(x, y) {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) return false;

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else {
            this.par[p2] = p1;
            this.rank[p1]++;
        }
        this.numComponents--;
        return true;
    }
}

class Solution {
    /**
     * @param {number}
     * @param {Array<Array<number>>}
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        const uf = new UnionFind(n);
        const minHeap = new MinPriorityQueue((val) => val[2]);
        let res = 0;

        for (const [n1, n2, weight] of edges) {
            minHeap.push([n1, n2, weight]);
        }

        while (uf.numComponents !== 1 && !minHeap.isEmpty()) {
            const [n1, n2, w] = minHeap.pop();
            if (!uf.union(n1, n2)) continue;
            res += w;
        }

        return uf.numComponents === 1 ? res : -1;
    }
}
