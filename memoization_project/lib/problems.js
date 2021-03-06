// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
  // if n is a key in the memoed hash return the value
  if (n in memo) return memo[n];
  if (n === 0) return 2;
  if (n === 1) return 1;
  // save values for n inputs with n as the key and the value of lucasNumber(n - 1) + lucasNumber(n-2) as the value
  memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
  // return the values in the hash at key of n for each stack
  return memo[n];
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {
  if (amount === 0) return 0;

  // check to see if amount is already in the memoization
  if (amount in memo) return memo[amount];

  // init an array to store coins
  let numCoins = [];
  // iterate through the coins
  coins.forEach((coin) => {
    // if the coin is less than or equal to the amount
    if (coin <= amount) {
      // then push the return value of minChange(coins, amount - coin, memo)
      numCoins.push(minChange(coins, amount - coin, memo) + 1);
    }
  });

  // set the amount as a key to the smallest value in numCoins
  memo[amount] = Math.min(...numCoins);
  // eventually push this value into the closure variable numCoins
  return memo[amount];
}

function minChangeNoMem(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  let numCoins = [];
  coins.forEach((coin) => {
    if (coin <= amount) {
      numCoins.push(minChange(coins, amount - coin, memo) + 1);
    }
  });
  return numCoins;
}

// console.log(minChangeNoMem([1, 2, 5], 3));
// console.log(minChangeNoMem([1, 2, 5], 30));
// console.log(minChangeNoMem([1, 2, 5], 300));
// console.log(minChangeNoMem([1, 2, 5], 3000));
// // slow computing process
// console.log(minChangeNoMem([1, 2, 5], 3000));
// console.log(minChangeNoMem([1, 2, 5], 3000));
// console.log(minChangeNoMem([1, 2, 5], 3000));

// console.log(minChange([1, 2, 5], 3));
// console.log(minChange([1, 2, 5], 30));
// console.log(minChange([1, 2, 5], 300));
// console.log(minChange([1, 2, 5], 3000));
// // efficient computing because of memoization
// // memoization saves values in a hash so we have instant look up
// // when computing values
// console.log(minChange([1, 2, 5], 3000));
// console.log(minChange([1, 2, 5], 3000));
// console.log(minChange([1, 2, 5], 3000));
// console.log(minChange([1, 2, 5], 3000));

module.exports = {
  lucasNumberMemo,
  minChange,
  minChangeNoMem,
};
