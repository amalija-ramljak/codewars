/**
 * Keeps max n occurrences of each item in the array with preserved order
 * @param {Array} arr - array of items with various counts
 * @param {int} n - number of max occurrences per item
 */
function deleteNth(arr, n) {
    const cnt = {}
    const new_arr = []
    for (let el of arr) {
        cnt[el] = cnt[el] ? cnt[el] + 1 : 1
        if (cnt[el] > n) {
            continue
        } else {
            new_arr.push(el)
        }
    }
    return new_arr
}
