class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let res = 1;
        let prev = "";
        let L = 0;
        let R = 1;
        while (R < arr.length) {
            if (arr[R - 1] < arr[R] && prev !== "<") {
                res = Math.max(res, R - L + 1);
                prev = "<";
                R++;
            } else if (arr[R - 1] > arr[R] && prev !== ">") {
                res = Math.max(res, R - L + 1);
                prev = ">";
                R++;
            } else {
                R = arr[R] === arr[R - 1] ? R + 1 : R;
                L = R - 1;
                prev = "";
            }
        }

        return res;
    }
}
