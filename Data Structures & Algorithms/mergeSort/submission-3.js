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
        return this.mergeSortHelper(pairs, 0, pairs.length - 1);
    }

    /**
     * @param {Pair[]} pairs
     * @param {number} l
     * @param {number} r
     */
    mergeSortHelper(pairs, l, r) {
        if (l >= r) {
            return pairs;
        }

        const m = Math.floor((l + r) / 2);
        this.mergeSortHelper(pairs, l, m);
        this.mergeSortHelper(pairs, m + 1, r);
        this.merge(pairs, l, m, r);

        return pairs;
    }

    /**
     * @param {Pair[]} pairs
     * @param {number} l
     * @param {number} m
     * @param {number} r
     */
    merge(pairs, l, m, r) {
        const length1 = m - l + 1;
        const length2 = r - m;

        const L = new Array(length1);
        const R = new Array(length2);

        for (let i = 0; i < length1; i++) {
            L[i] = pairs[l + i];
        }

        for (let i = 0; i < length2; i++) {
            R[i] = pairs[m + 1 + i];
        }

        let i = 0;
        let j = 0;
        let k = l;

        while (i < length1 && j < length2) {
            if (L[i].key <= R[j].key) {
                pairs[k] = L[i];
                i++;
            } else {
                pairs[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < length1) {
            pairs[k] = L[i];
            i++;
            k++;
        }

        while (j < length2) {
            pairs[k] = R[j];
            j++;
            k++;
        }
    }
}
