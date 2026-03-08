class Solution {
    public int numberOfSteps(int num) {

        // base condition
        if (num == 0) {
            return 0;
        }

        // if number is even
        if (num % 2 == 0) {
            return 1 + numberOfSteps(num / 2);
        }

        // if number is odd
        return 1 + numberOfSteps(num - 1);
    }
}