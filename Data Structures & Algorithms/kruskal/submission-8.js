class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
        this.components = n;
    }

    find(x) {
        if (this.par[x] === x) return x;
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
        this.components--;
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
        edges.sort((a, b) => a[2] - b[2]);
        let res = 0;
        for (const edge of edges) {
            if (uf.union(edge[0], edge[1])) {
                res += edge[2];
            }
        }
        return uf.components === 1 ? res : -1;
    }
}
