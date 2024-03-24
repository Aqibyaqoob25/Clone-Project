let n = [1, 2, 3, 4];
console.log(
  n
    .map(function (x) {
      return x * x;
    })
    .reduce(function (total, val) {
      return total + val;
    })
);
