const repeatString = function(str, n) {
    let repeatedStr = "";

    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            repeatedStr += str
        }
    }
    else {
        repeatedStr = "ERROR";
        // OR just return "ERROR";
    }

    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
