class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        tickets.sort();
        const adj = {};
        for (const [src, dst] of tickets) {
            if (!adj[src]) adj[src] = [];
            adj[src].push(dst);
        }

        let res = ["JFK"];

        const dfs = (src) => {
            if (res.length === tickets.length + 1) return true;
            if (!adj[src]) return false;

            const tmp = [...adj[src]];
            for (let i = 0; i < tmp.length; i++) {
                const v = tmp[i];
                adj[src].splice(i, 1);
                res.push(v);
                if (dfs(v)) return true;
                res.pop();
                adj[src].splice(i, 0, v);
            }
            return false;
        }

        dfs("JFK");
        return res;
    }
}
