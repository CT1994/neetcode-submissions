class Twitter {
    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
        this.tweetCount = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId).push([this.tweetCount, tweetId]);
        this.tweetCount++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        if (!this.followers.has(userId)) {
            this.followers.set(userId, new Set());
        }
        this.followers.get(userId).add(userId);

        const maxHeap = new MaxPriorityQueue((val) => val[0]);
        for (const followeeId of this.followers.get(userId)) {
            if (this.tweets.has(followeeId)) {
                const tweets = this.tweets.get(followeeId);
                const index = tweets.length - 1;
                const [count, tweetId] = tweets[index];
                maxHeap.push([count, tweetId, followeeId, index - 1]);
            }
        }

        const res = [];

        while (maxHeap.size() && res.length < 10) {
            const [_, tweetId, followeeId, nextIndex] = maxHeap.pop();
            res.push(tweetId);
            if (nextIndex >= 0) {
                const [count, tweetId] = this.tweets.get(followeeId)[nextIndex];
                maxHeap.push([count, tweetId, followeeId, nextIndex - 1]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }

        this.followers.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followers.has(followerId)) {
            this.followers.get(followerId).delete(followeeId);
        }
    }
}
