class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let res = 1;
        let l = 0;
        let r = 1;
        let prev = "";
        while (r < arr.length) {
            if (arr[r - 1] < arr[r] && prev !== "<") {
                res = Math.max(res, r - l + 1);
                r++;
                prev = "<";
            } else if (arr[r - 1] > arr[r] && prev !== ">") {
                res = Math.max(res, r - l + 1);
                r++;
                prev = ">";
            } else {
                r = arr[r - 1] === arr[r] ? r + 1 : r;
                l = r - 1;
                prev = "";
            }
        }
        return res;
    }
}
