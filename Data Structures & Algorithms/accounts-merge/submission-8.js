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
        const accountToId = new Map();

        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];
                if (accountToId.has(email)) {
                    uf.union(accountToId.get(email), i);
                } else {
                    accountToId.set(email, i);
                }
            }
        }

        const mergedEmails = new Map();
        for (const [email, id] of accountToId.entries()) {
            const accountId = uf.find(id);
            if (!mergedEmails.has(accountId)) {
                mergedEmails.set(accountId, []);
            }
            mergedEmails.get(accountId).push(email);
        }

        const res = [];
        for (const [id, emails] of mergedEmails.entries()) {
            const name = accounts[parseInt(id)][0];
            emails.sort();
            res.push([name, ...emails]);
        }
        return res;
    }
}
