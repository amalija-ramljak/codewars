/**
 * Finds the letter missing from the array in alphabetical order
 * @param {Array} array - array of sorted consecutive letters with one missing
 */
function findMissingLetter(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i].charCodeAt(0) - array[i - 1].charCodeAt(0) > 1) {
            return String.fromCharCode(array[i].charCodeAt(0) - 1)
        }
    }
}
