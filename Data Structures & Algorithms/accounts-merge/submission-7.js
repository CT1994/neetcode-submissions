class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
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
        const emailToAcc = new Map();
        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];
                if (emailToAcc.has(email)) {
                    uf.union(i, emailToAcc.get(email));
                    emailToAcc.set(email, i);
                } else {
                    emailToAcc.set(email, i);
                }
            }
        }

        const emailGrouped = new Map();
        for (const [email, key] of emailToAcc.entries()) {
            const accId = uf.find(key);
            if (!emailGrouped.has(accId)) {
                emailGrouped.set(accId, []);
            }
            emailGrouped.get(accId).push(email);
        }

        const merged = [];
        for (const [accId, emails] of emailGrouped.entries()) {
            emails.sort();
            merged.push([accounts[accId][0], ...emails]);
        }

        return merged;
    }
}
