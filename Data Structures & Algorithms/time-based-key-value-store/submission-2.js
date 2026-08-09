class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        const data = this.keyStore.get(key);
        if (!data || data.length === 0) return "";

        // binary search for the largest timestamp <= given timestamp
        let lo = 0, hi = data.length - 1, resultIdx = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (data[mid][0] <= timestamp) {
                resultIdx = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return resultIdx === -1 ? "" : data[resultIdx][1];
    }
}