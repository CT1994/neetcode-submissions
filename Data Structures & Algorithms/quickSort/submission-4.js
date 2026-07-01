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
        this.quickSortHelper(pairs, 0, pairs.length - 1);
        return pairs;
    }

    quickSortHelper(pairs, s, e) {
        if (s > e) {
            return;
        }

        const pivot = pairs[e];
        let left = s;

        for (let i = left; i < e; i++) {
            if (pairs[i].key < pivot.key) {
                [pairs[i], pairs[left]] = [pairs[left], pairs[i]];
                left++;
            }
        }

        [pairs[left], pairs[e]] = [pairs[e], pairs[left]];
        this.quickSortHelper(pairs, s, left - 1);
        this.quickSortHelper(pairs, left + 1, e);
    }
}
