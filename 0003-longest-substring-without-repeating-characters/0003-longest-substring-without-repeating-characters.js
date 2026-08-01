/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {

        let set = new Set();

        for (let j = i; j < s.length; j++) {

            if (set.has(s[j])) {
                break;
            }

            set.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);

        }
    }

    return maxLength;
};