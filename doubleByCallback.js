function doubleUsingCallback(arr, fun) {
  let ans = arr.map((e) => fun(e));
  return ans;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function double(x) {
  return x * 2;
}

console.log(doubleUsingCallback(arr, double));