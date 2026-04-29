class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = new Array(n);
        this.rank = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            this.par[i] = i
        }

        this.numComponents = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.par[x];

        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]]
            p = this.par[p]
        }

        return p
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        const p1 = this.find(x)
        const p2 = this.find(y)

        if (p1 === p2) {
            return false;
        }

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1
        }
        else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2
        }
        else {
            this.par[p1] = p2
            this.rank[p2]++ 
        }

        this.numComponents--

        return true
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.numComponents
    }
}
