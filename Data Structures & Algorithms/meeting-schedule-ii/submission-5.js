/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        const q = new MinPriorityQueue();
        for (let i = 0; i < intervals.length; i++) {
            if (!q.isEmpty() && intervals[i].start >= q.front()) {
                q.dequeue();
            }
            q.enqueue(intervals[i].end);
        }

        return q.size();
    }
}
