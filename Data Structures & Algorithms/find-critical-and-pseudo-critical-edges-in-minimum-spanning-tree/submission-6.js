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
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        edges.forEach((edge, i) => edge.push(i));
        edges.sort((a, b) => a[2] - b[2]);

        const findMST = (index, include) => {
            let mst = 0;
            const uf = new UnionFind(n);

            if (include) {
                uf.union(edges[index][0], edges[index][1]);
                mst += edges[index][2];
            }

            for (let i = 0; i < edges.length; i++) {
                if (i === index) continue;
                if (uf.union(edges[i][0], edges[i][1])) {
                    mst += edges[i][2];
                }
            }

            return uf.components === 1 ? mst : Infinity;
        };

        const baseMST = findMST(-1, false);
        const critical = [];
        const pseudo = [];
        edges.forEach((edge, i) => {
            if (findMST(i, false) > baseMST) {
                critical.push(edge[3]);
            } else if (findMST(i, true) === baseMST) {
                pseudo.push(edge[3]);
            }
        });

        return [critical, pseudo];
    }
}
