class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = new Array(2).fill(0);
        for (const student of students) {
            count[student]++;
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
