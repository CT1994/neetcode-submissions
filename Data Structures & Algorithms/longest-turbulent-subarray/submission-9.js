class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let res = 1;
        let prev = "";
        let l = 0;
        let r = 1;
        while (r < arr.length) {
            if (arr[r] < arr[r - 1] && prev !== "<") {
                res = Math.max(res, r - l + 1);
                prev = "<";
                r++;
            } else if (arr[r] > arr[r - 1] && prev !== ">") {
                res = Math.max(res, r - l + 1);
                prev = ">";
                r++;
            } else {
                r = arr[r] === arr[r - 1] ? r + 1 : r;
                l = r - 1;
                prev = "";
            }
        }
        return res;
    }
}
