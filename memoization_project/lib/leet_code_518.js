// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

/* 
You are given coins of different denominations and a total 
amount of money. Write a function to compute the number of 
combinations that make up that amount. You may assume that you 
have infinite number of each kind of coin.

example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 
2.
*/

var change = function (amount, coins) {
  if (counter === amount) return; //something
  // outputs the number of combination of coins that make the amount
  // initialize a counter
  let counter = 0;
  // for each time it enters the recursive stack we want to increment the
  // counter
  // increment that counter until the amount is met
  // 1 + the call to the change fn
};
