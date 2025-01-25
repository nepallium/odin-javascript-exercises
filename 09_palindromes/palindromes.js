const palindromes = function (str) {
    str = str.toLowerCase();
    // Remove all non-alphanumeric characters
    let converted = [...str]
                .filter((char, index) => (str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57) ||
                    (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122))
                .join("");
    
    for (let i = 0; i < converted.length / 2; i++) {
        if (converted.charAt(i) !== converted.charAt(converted.length-i-1)) {
            return false;
        }
    }
    return true;
};



// Do not edit below this line
module.exports = palindromes;
