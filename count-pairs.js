// add whatever parameters you deem necessary
function countPairs(arr, target) {

    const result = []
    const set = new Set(arr)

    for(let el of set){
        set.delete(el)
        const required = target - el
        if(set.has(required)){
            result.push([el, required])
            set.delete(required)
        }
    }

    return result.length

}

module.exports = countPairs