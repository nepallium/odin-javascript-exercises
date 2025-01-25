const findTheOldest = function(array) {
    return array.reduce((oldest, person) => {
        let currentYear = new Date().getFullYear();
        oldYearOfDeath = oldest.yearOfDeath === undefined ? currentYear : oldest.yearOfDeath;
        pYearOfDeath = person.yearOfDeath === undefined ? currentYear : person.yearOfDeath
        if ((oldYearOfDeath - oldest.yearOfBirth) < (pYearOfDeath - person.yearOfBirth)) {
            return person;
        }
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
