class MyCalendar {
    constructor() {
        this.events = [];
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
        for (const [start, end] of this.events) {
            if (end > startTime && start < endTime) {
                return false;
            }
        }

        this.events.push([startTime, endTime]);
        return true;
    }
}
