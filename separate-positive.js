// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0
    let right = arr.length - 1 
    pivot = 0

    while(left < right){
        if(arr[left] > 0){
            left ++
        } else {
            if(arr[right] > 0){
                swap(arr, left, right)
            }
            right --
        }
    }
    return arr
}

function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


module.exports = separatePositive