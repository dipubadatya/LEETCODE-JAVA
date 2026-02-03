class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int n = mountainArr.length();
        
        // 1. Find the peak
        int peak = findPeakIndex(mountainArr, n);

        // 2. Search in the left  side
        int firstHalf = orderAgnosticBS(target, mountainArr, 0, peak);
        if (firstHalf != -1) {
            return firstHalf;
        }

        // 3. Search in the right  side
        return orderAgnosticBS(target, mountainArr, peak + 1, n - 1);
    }

    
   int findPeakIndex(MountainArray arr, int n) {
        int start = 0;
        int end = n - 1;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (arr.get(mid) > arr.get(mid + 1)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

     int orderAgnosticBS(int target, MountainArray arr, int start, int end) {

        boolean isAsc = arr.get(start) < arr.get(end);
        while (start <= end) {
            int mid = start + (end - start) / 2;
            int midVal = arr.get(mid); 

            if (midVal == target) {
                return mid;
            }

            if (isAsc) {
                if (target < midVal) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                // Descending logic
                if (target > midVal) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return -1;
    }
}