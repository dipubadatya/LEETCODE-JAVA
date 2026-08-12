var TimeMap = function() {
    this.timeMap = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.timeMap.has(key)) {
        this.timeMap.set(key, []);
    }

    this.timeMap.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.timeMap.has(key)) {
        return "";
    }

    const values = this.timeMap.get(key);

    let left = 0;
    let right = values.length - 1;
    let result = "";

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const [time, value] = values[mid];

        if (time <= timestamp) {
            result = value;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};