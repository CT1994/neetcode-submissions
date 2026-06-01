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

        let rooms = 0;
        const q = new MinPriorityQueue();
        for (let i = 0; i < intervals.length; i++) {
            const { start, end } = intervals[i];

            if (!q.isEmpty() && start >= q.front()) {
                q.dequeue();
            }
            q.enqueue(end);

            rooms = Math.max(rooms, q.size());
        }

        return rooms;
    }
}
