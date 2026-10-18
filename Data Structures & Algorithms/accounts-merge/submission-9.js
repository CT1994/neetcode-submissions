class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if (this.par[x] === x) return x;
        return (this.par[x] = this.find(this.par[x]));
    }

    union(x, y) {
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) return false;

        if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
        } else {
            this.par[p2] = p1;
            this.rank[p1]++;
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const uf = new UnionFind(accounts.length);
        const accToIdx = new Map();
        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];
                if (accToIdx.has(email)) {
                    uf.union(i, accToIdx.get(email));
                } else {
                    accToIdx.set(email, i);
                }
            }
        }

        const emailGroup = new Map();
        for (const [email, idx] of accToIdx.entries()) {
            const accIdx = uf.find(idx)
            if (!emailGroup.has(accIdx)) {
                emailGroup.set(accIdx, []);
            }
            emailGroup.get(accIdx).push(email);
        }

        const res = [];
        for (const [idx, emails] of emailGroup.entries()) {
            emails.sort();
            res.push([accounts[idx][0], ...emails]);
        }
        return res;
    }
}
