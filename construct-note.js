const { moduleExpression } = require("@babel/types")

// add whatever parameters you deem necessary
function constructNote(msg, str) {
    const msgFreq = freqCounter(msg)
    const strFreq = freqCounter(str)

    for(let char of msg){
        if(!strFreq[char]) return false
        if(strFreq[char] < msgFreq[char]) return false
    }

    return true

}

function freqCounter(str){
    const counter = {}

    for(let char of str.toLowerCase()){
        const val = counter[char] || 0
        counter[char] = val + 1
    }

    return counter
}


module.exports = { constructNote, freqCounter}