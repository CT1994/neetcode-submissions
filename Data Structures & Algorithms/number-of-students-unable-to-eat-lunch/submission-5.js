class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = new Uint8Array(2);
        for (const n of students) {
            count[n]++;
        }

        for (let s of sandwiches) {
            if (count[s]) {
                count[s]--;
            } else {
                break;
            }
        }

        return count[0] ? count[0] : count[1];
    }
}
