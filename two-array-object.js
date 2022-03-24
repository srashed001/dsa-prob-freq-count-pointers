// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    const obj = {}

    let i = 0

    while(i < arr1.length){
        obj[arr1[i]] = arr2[i] || null
        i++
    }
    return obj
}

module.exports = twoArrayObject