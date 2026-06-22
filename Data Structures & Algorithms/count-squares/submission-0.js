class CountSquares {
    constructor() {
        this.points = [];
        this.pointsCount = {};
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.points.push(point);
        const key = point.join(",");
        this.pointsCount[key] = (this.pointsCount[key] || 0) + 1;
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let res = 0;
        const [px, py] = point;
        for (const [x, y] of this.points) {
            if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) {
                continue;
            }

            res += (this.pointsCount[`${x},${py}`] || 0) * (this.pointsCount[`${px},${y}`] || 0);
        }

        return res;
    }
}
