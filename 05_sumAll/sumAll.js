const sumAll = function(firstNum, secondNum) {
    if (typeof firstNum !== "number" ||
        typeof secondNum !== "number" ||
        firstNum < 0 || secondNum < 0 ||
        !Number.isInteger(firstNum) ||
        !Number.isInteger(secondNum)
    ) {
        return "ERROR"
    }

    start = firstNum < secondNum ? firstNum : secondNum;
    end = firstNum > secondNum ? firstNum : secondNum;

    let length = end-start + 1;
    return (length*(start+end)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
