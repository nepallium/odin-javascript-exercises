const removeFromArray = function(array, ...itemsToRemove) {
    for (element of itemsToRemove) {
        for (let i = 0; i < array.length; i++) {
            // Delete element if it matches with current index in array
            if (array[i] === element) {
                array.splice(i, 1) // delete 1 element at index i 
                i--; // go back 1 index since an element has been deleted
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
