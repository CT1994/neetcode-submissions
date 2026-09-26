class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const n = profits.length;

        // 1. DATA LAYOUT (Structure of Arrays - SoA)
        // Store project IDs sorted by required capital using a typed array.
        const indices = new Int32Array(n);
        for (let i = 0; i < n; i++) {
            indices[i] = i;
        }

        // Sort index buffer based on capital values in contiguous memory
        indices.sort((a, b) => capital[a] - capital[b]);

        // Flat Int32Array memory buffer for Max-Heap (stores profit values directly)
        const heap = new Int32Array(n);
        let heapSize = 0;

        let projectIdx = 0;

        // 2. MAIN EXECUTION LOOP
        for (let i = 0; i < k; i++) {
            // Push all affordable projects into the heap
            while (projectIdx < n && capital[indices[projectIdx]] <= w) {
                const profit = profits[indices[projectIdx]];

                // Inlined Binary Max-Heap Push
                let curr = heapSize++;
                heap[curr] = profit;

                while (curr > 0) {
                    const parent = (curr - 1) >> 1;
                    if (heap[parent] >= heap[curr]) break;

                    // Swap parent and current
                    const tmp = heap[parent];
                    heap[parent] = heap[curr];
                    heap[curr] = tmp;

                    curr = parent;
                }

                projectIdx++;
            }

            // If no affordable projects are available, stop early
            if (heapSize === 0) break;

            // Take the project with the highest profit (Max-Heap Pop)
            w += heap[0];

            // Inlined Binary Max-Heap Pop
            heapSize--;
            heap[0] = heap[heapSize];

            let curr = 0;
            while (true) {
                let largest = curr;
                const left = (curr << 1) + 1;
                const right = left + 1;

                if (left < heapSize && heap[left] > heap[largest]) {
                    largest = left;
                }
                if (right < heapSize && heap[right] > heap[largest]) {
                    largest = right;
                }

                if (largest === curr) break;

                const tmp = heap[curr];
                heap[curr] = heap[largest];
                heap[largest] = tmp;

                curr = largest;
            }
        }

        return w;
    }
}
