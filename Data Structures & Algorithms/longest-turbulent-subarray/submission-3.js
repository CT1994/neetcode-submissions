class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let res = 1;
        let L = 0;
        let prev = "";

        for (let R = 1; R < arr.length; R++) {
            let sign = "";
            let val = arr[R - 1] - arr[R];

            if (val === 0) {
                sign = "=";
            } else if (val < 0) {
                sign = "<";
            } else {
                sign = ">";
            }

            if (sign === "=") {
                L = R;
            } else if (sign === prev) {
                L = R - 1;
            } else {
                res = Math.max(res, R - L + 1);
            }
            prev = sign;
        }

        return res;
    }
}
