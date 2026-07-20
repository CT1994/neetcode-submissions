class UnionFind {
    constructor(n) {
        this.par = new Array(n);
        this.rank = new Array(n).fill(0);
        this.numComponents = n;
        for (let i = 0; i < n; i++) {
            this.par[i] = i;
        }
    }

    find(x) {
        if (x === this.par[x]) return x;
        return (this.par[x] = this.find(this.par[x]));
    }

    union(x, y) {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) return false;

        if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else if (this.rank[p1] > this.rank[p1]) {
            this.par[p2] = p1;
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
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const uf = new UnionFind(n);
        for (const [n1, n2] of edges) {
            uf.union(n1, n2);
        }
        return uf.numComponents;
    }
}
