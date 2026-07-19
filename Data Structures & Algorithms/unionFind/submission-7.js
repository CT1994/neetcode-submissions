class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = new Uint32Array(n);
        this.size = new Uint32Array(n);

        for (let i = 0; i < n; i++) {
            this.par[i] = i;
        }
        this.size.fill(1);

        this.numComponents = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let root = x;
        while (root !== this.par[root]) {
            root = this.par[root];
        }

        let curr = x;
        while (curr !== root) {
            let nxt = this.par[curr];
            this.par[curr] = root;
            curr = nxt;
        }
        return root;
    }

    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return false;

        if (this.size[rootX] < this.size[rootY]) {
            this.par[rootX] = rootY;
            this.size[rootY] += this.size[rootX];
        } else {
            this.par[rootY] = rootX;
            this.size[rootX] += this.size[rootY];
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
