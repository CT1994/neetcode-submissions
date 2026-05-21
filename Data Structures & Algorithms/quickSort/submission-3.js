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
        const sort = (l, r) => {
            if (l < r) {
                const pivot = pairs[r];
                let k = l;

                for (let i = l; i < r; i++) {
                    if (pairs[i].key < pivot.key) {
                        [pairs[k], pairs[i]] = [pairs[i], pairs[k]];
                        k++;
                    }
                }

                [pairs[r], pairs[k]] = [pairs[k], pairs[r]];
                sort(l, k - 1);
                sort(k + 1, r);
            }
        };

        sort(0, pairs.length - 1);
        return pairs;
    }
}
