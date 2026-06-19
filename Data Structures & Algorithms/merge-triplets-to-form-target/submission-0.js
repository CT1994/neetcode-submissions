class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const items = [];
        for (let i = 0; i < triplets.length; i++) {
            if (
                triplets[i][0] > target[0] ||
                triplets[i][1] > target[1] ||
                triplets[i][2] > target[2]
            ) {
                continue;
            }

            items.push(triplets[i]);
        }

        let combined = [0, 0, 0];

        for (let i = 0; i < items.length; i++) {
            combined = [
                Math.max(combined[0], items[i][0]),
                Math.max(combined[1], items[i][1]),
                Math.max(combined[2], items[i][2]),
            ];
        }

        return combined[0] === target[0] && combined[1] === target[1] && combined[2] === target[2];
    }
}
