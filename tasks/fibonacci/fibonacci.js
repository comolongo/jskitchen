// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...


function fibonacci(num){
  if (num <= 1) num = 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}