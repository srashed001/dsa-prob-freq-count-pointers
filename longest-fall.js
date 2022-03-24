// add whatever parameters you deem necessary
function longestFall(arr) {

if(!arr.length) return 0
  let max = 1;
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 1;
    }
  }
  return  count > max ? count : max
}

module.exports = longestFall;
