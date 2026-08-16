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
    mergeSort(pairs) {
        this.divide(pairs, 0, pairs.length - 1);
        return pairs;
    }

    divide(pairs, l, r) {
        if (r - l + 1 <= 1) {
            return;
        }

        const m = l + Math.floor((r - l) / 2);
        this.divide(pairs, l, m);
        this.divide(pairs, m + 1, r);
        this.conquer(pairs, l, m, r);
    }

    /**
     * @param {Pair[]} pairs
     */
    conquer(pairs, l, m, r) {
        const L = pairs.slice(l, m + 1);
        const R = pairs.slice(m + 1, r + 1);

        let i = 0;
        let j = 0;
        let k = l;

        while (i < L.length && j < R.length) {
            if (L[i].key <= R[j].key) {
                pairs[k++] = L[i++];
            } else {
                pairs[k++] = R[j++];
            }
        }

        while (i < L.length) {
            pairs[k++] = L[i++];
        }

        while (j < R.length) {
            pairs[k++] = R[j++];
        }
    }
}
