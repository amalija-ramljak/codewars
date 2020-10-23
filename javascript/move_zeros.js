/**
 * Moves all zeros in the list to the end of the list
 * @param {Array} arr - array of all items
 */
var moveZeros = function (arr) {
    return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0))
}
