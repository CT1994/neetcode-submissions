class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n;
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
        const minHeap = new PriorityQueue((a, b) => a[2] - b[2], edges);
        let mst = 0;
        while (!minHeap.isEmpty() && uf.components > 1) {
            const [n1, n2, w] = minHeap.pop();
            if (uf.union(n1, n2)) {
                mst += w;
            }
        }

        return uf.components === 1 ? mst : -1;
    }
}
