class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const par = new Uint8Array(edges.length + 1);
        const rank = new Uint8Array(edges.length + 1).fill(0);
        for (let i = 0; i <= edges.length; i++) {
            par[i] = i;
        }

        const find = (x) => {
            if (x === par[x]) return x;
            return (par[x] = find(par[x]));
        };

        const union = (x, y) => {
            const p1 = find(x);
            const p2 = find(y);

            if (p1 === p2) return false;

            if (rank[p1] > rank[p2]) {
                par[p2] = p1;
            } else if (rank[p1] < rank[p2]) {
                par[p1] = p2;
            } else {
                par[p2] = p1;
                rank[p1]++;
            }
            return true;
        };

        for (const [n1, n2] of edges) {
            if (!union(n1, n2)) {
                return [n1, n2];
            }
        }

        return [];
    }
}
