class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
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
        return true;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const edges = [];
        const n = points.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                edges.push([
                    i,
                    j,
                    Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]),
                ]);
            }
        }

        edges.sort((a, b) => a[2] - b[2]);
        const uf = new UnionFind(points.length);
        let mst = 0;
        edges.forEach((edge) => {
            if (uf.union(edge[0], edge[1])) {
                mst += edge[2];
            }
        });

        return mst;
    }
}
