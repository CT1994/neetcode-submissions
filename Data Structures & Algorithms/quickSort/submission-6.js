/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.divideHelper(pairs, 0, pairs.length - 1);
        return pairs;
    }

    divideHelper(pairs, s, e) {
        if (e - s + 1 <= 1) return;

        const pivot = pairs[e];
        let l = s;

        for (let i = s; i < e; i++) {
            if (pairs[i].key < pivot.key) {
                [pairs[i], pairs[l]] = [pairs[l], pairs[i]];
                l++;
            }
        }

        [pairs[e], pairs[l]] = [pairs[l], pairs[e]];
        this.divideHelper(pairs, s, l - 1);
        this.divideHelper(pairs, l + 1, e);
    }
}
