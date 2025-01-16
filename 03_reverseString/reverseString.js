const reverseString = function(toReverse) {
    let reversedStr = "";

    for (let i = toReverse.length - 1; i >= 0; i--) {
        reversedStr += toReverse[i];
    }

    return reversedStr;

};

// Do not edit below this line
module.exports = reverseString;
