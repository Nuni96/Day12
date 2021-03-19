function sumFibonacci(num) {
  // Only change code below this line
  if (num < 0) {
    return 0;
  } else if (num <= 1) return 1;
  var fib = [];
  fib[0] = 1;
  fib[1] = 1;
  for (var i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  fib = fib.filter(function (val) {
    return val % 2 !== 0 && val <= num;
  });
  fib = fib.reduce(function (a, b) {
    return a + b;
  });
  return fib;
  // Only change code above this line
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
