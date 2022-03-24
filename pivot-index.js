// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftSum = arr[left];
  let rightSum = arr[right];

  while (left < right) {

    if (leftSum === rightSum) {
      left++;
      leftSum += arr[left]
      right--;
      rightSum +=arr[right]
    } else {
      if (leftSum + arr[left + 1] < rightSum + arr[right - 1]) {
        left++;
        leftSum += arr[left];
      }
      else {
          right--;
          rightSum += arr[right]
      }
    }
  }

  return leftSum === rightSum ? (left+right)/2 : -1
}

module.exports = pivotIndex