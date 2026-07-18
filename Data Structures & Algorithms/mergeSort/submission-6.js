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
        if (r - l + 1 > 1) {
            const m = l + Math.floor((r - l) / 2);
            this.divide(pairs, l, m);
            this.divide(pairs, m + 1, r);
            this.conquer(pairs, l, r, m);
        }
    }

    conquer(pairs, l, r, m) {
        const length1 = m - l + 1;
        const length2 = r - m;

        const L = new Array(length1);
        const R = new Array(length2);

        for (let i = 0; i < length1; i++) {
            L[i] = pairs[l + i];
        }

        for (let i = 0; i < length2; i++) {
            R[i] = pairs[m + i + 1];
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
