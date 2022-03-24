// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const num1Freq = numFreq(num1.toString())
    const num2Freq = numFreq(num2.toString())

    if (num1Freq.size !== num2Freq.size) return false

    for(let char of num1.toString()){
        if(!num2Freq.has(char)) return false;
        if(num1Freq.get(char) !== num2Freq.get(char)) return false
    }

    return true
}



function numFreq(str){
    const map = new Map();

    for(let char of str){
        const val = map.get(char) || 0
        map.set(char, val + 1)
    }

    return map 

}

module.exports = sameFrequency