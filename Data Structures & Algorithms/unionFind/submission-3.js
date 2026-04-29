class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = new Map();
        this.rank = new Map();

        for (let i = 0; i < n; i++) {
            this.par.set(i, i)
            this.rank.set(i, 0)
        }

        this.numComponents = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.par.get(x);

        while (p !== this.par.get(p)) {
            this.par.set(p, this.par.get(this.par.get(p)))
            p = this.par.get(p)
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

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.par.set(p2, p1)
        }
        else if (this.rank.get(p1) < this.rank.get(p2)) {
            this.par.set(p1, p2)
        }
        else {
            this.par.set(p1, p2);
            this.rank.set(p2, this.rank.get(p2) + 1)
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
