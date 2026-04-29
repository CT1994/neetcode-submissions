class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.parent = new Map();
        this.rank = new Map();
        this.numComponents = n;

        for (let i = 0; i < n; i++) {
            this.parent.set(i, i);
            this.rank.set(i, 0);
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.parent.get(x);

        while (p !== this.parent.get(p)) {
            this.parent.set(p, this.parent.get(this.parent.get(p)));
            p = this.parent.get(p);
        }

        return p;
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
        const p1 = this.find(x);
        const p2 = this.find(y);

        if (p1 === p2) {
            return false;
        }

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.parent.set(p2, p1);
        } else if (this.rank.get(p1) < this.rank.get(p2)) {
            this.parent.set(p1, p2)
        } else {
            this.parent.set(p1, p2);
            this.rank.set(p2, this.rank.get(p2) + 1)
        }

        this.numComponents--;
        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.numComponents;
    }
}
