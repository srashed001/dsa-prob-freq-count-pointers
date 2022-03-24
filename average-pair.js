// add whatever parameters you deem necessary
function averagePair(arr, target) {

    const set = new Set(arr);

    for(let el of arr){
        const requiredEl = 2 * target - el
        if(set.has(requiredEl)) return true
    }
    return false
}

module.exports = averagePair
