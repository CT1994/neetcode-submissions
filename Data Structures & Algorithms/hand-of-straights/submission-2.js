class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }
        hand.sort((a, b) => a - b);
        const groups = Array.from({length: hand.length / groupSize}, () => new Array());
        while (hand.length) {
            const num = hand.shift();
            let i = 0;
            while (i < groups.length) {
                if (groups[i].length === 0) {
                    break
                }
                if (groups[i].length < groupSize && groups[i][groups[i].length - 1] + 1 === num) {
                    break;
                }
                i++;
            }

            if (i === groups.length) {
                return false
            }
            else {
                groups[i].push(num);
            }
        }

        return groups.every((group) => group.length === groupSize);
    }
}
