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

    quickSortHelper(pairs, l, r) {
        console.log(pairs, l, r);
        if (r - l + 1 <= 1) {
            return;
        }

        const pivot = pairs[r];
        let left = l;
        for (let i = l; i < r; i++) {
            if (pairs[i].key < pivot.key) {
                [pairs[left], pairs[i]] = [pairs[i], pairs[left]];
                left++;
            }
        }

        [pairs[left], pairs[r]] = [pairs[r], pairs[left]];
        this.quickSortHelper(pairs, l, left - 1);
        this.quickSortHelper(pairs, left + 1, r);
    }
}
