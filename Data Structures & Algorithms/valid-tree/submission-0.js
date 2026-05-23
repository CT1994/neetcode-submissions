class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = Array.from({ length: n }, (_, i) => i);
        this.components = n;
    }

    find(x) {
        let p = this.par[x];

        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p];
        }

        return p;
    }

    union(x, y) {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) {
            return false;
        }

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
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const uf = new UnionFind(n);

        for (const [x, y] of edges) {
            if (!uf.union(x, y)) {
                return false;
            }
        }

        return uf.components === 1;
    }
}
