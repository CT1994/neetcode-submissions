class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        this.heap = [0];
        this.k = k;

        for (const point of points) {
            this.push(point);
        }

        return this.heap.slice(1, 1 + k)
    }

    euclideanDistance(point) {
        return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
    }

    push(points) {
        this.heap.push(points);
        let child = this.heap.length - 1;
        let parent = Math.floor(child / 2);

        while (child > 1 && this.euclideanDistance(this.heap[child]) > this.euclideanDistance(this.heap[parent])) {
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]]
            child = parent;
            parent = Math.floor(child / 2)
        }

        while (this.heap.length - 1 > this.k) {
            this.pop()
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return;
        }

        if (this.heap.length === 2) {
            this.heap.pop();
            return
        }

        this.heap[1] = this.heap.pop()
        let i = 1;

        while (i * 2 < this.heap.length) {
            let child = i * 2
            if (child + 1 < this.heap.length && this.euclideanDistance(this.heap[child + 1]) > this.euclideanDistance(this.heap[child])) {
                child++
            }

            if (this.euclideanDistance(this.heap[i]) >= this.euclideanDistance(this.heap[child])) {
                break;
            }

            [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]];
            i = child;
        }
    }
}
