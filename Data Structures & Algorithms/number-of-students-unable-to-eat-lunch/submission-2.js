class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length;
        const count = new Uint8Array(2);
        students.forEach((s) => count[s]++);

        for (let s of sandwiches) {
            if (count[s] > 0) {
                count[s]--;
                res--;
            } else {
                break;
            }
        }

        return res;
    }
}
