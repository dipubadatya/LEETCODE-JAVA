class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
       int expectedSum = n * (n + 1) / 2 ;


       int actualSum = 0;
      for(int sum : nums){
        actualSum += sum;
      }
          
         
        
        return expectedSum - actualSum;
    }
}