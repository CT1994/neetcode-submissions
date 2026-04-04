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
        this.quickSortHelper(pairs, 0, pairs.length - 1)
        return pairs;
    }

    quickSortHelper(pairs, s, e) {
        console.log(pairs)
        if (e - s + 1 <= 1) {
            return pairs;
        }

        let pivot = e;
        let j = s;

        for (let i = s; i < e; i++) {
            if (pairs[i].key < pairs[pivot].key) {
                const tmp = pairs[j]
                pairs[j] = pairs[i];
                pairs[i] = tmp;
                j++;
            }
        }

        const tmp = pairs[j];
        pairs[j] = pairs[pivot];
        pairs[pivot] = tmp;

        this.quickSortHelper(pairs, s, j - 1);
        this.quickSortHelper(pairs, j + 1, e)
    }
}
