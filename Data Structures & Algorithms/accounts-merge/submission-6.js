class UnionFind {
    constructor(n) {
        this.par = new Array(n);
        this.rank = new Array(n).fill(0);
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

        const mergedEmails = new Map();
        for (const [email, accId] of accToIdx.entries()) {
            const leader = uf.find(accId);
            if (!mergedEmails.has(leader)) {
                mergedEmails.set(leader, []);
            }
            mergedEmails.get(leader).push(email);
        }

        const res = [];
        for (const [accId, emails] of mergedEmails.entries()) {
            emails.sort();
            res.push([accounts[accId][0], ...emails]);
        }

        return res;
    }
}
