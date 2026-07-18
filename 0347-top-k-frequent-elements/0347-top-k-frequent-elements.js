var topKFrequent = function(nums, k) {
    const map = new Map();

  
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const entries = [...map.entries()];

    
    entries.sort((a, b) => b[1] - a[1]);

   
    return entries.slice(0, k).map(item => item[0]);
};