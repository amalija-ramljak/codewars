/**
 * Removes duplicates of elements when they are next to one another
 * @param {string|Array} iterable - a string of list of any comparable elements
 */
var uniqueInOrder = function (iterable) {
    let new_arr = []
    for (let el of iterable) {
        if (el !== new_arr[new_arr.length - 1]) {
            new_arr.push(el)
        }
    }
    return new_arr
}
