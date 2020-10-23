/**
 * Finds the item that has an odd number of occurrences
 * There is only one
 * @param {Array} A
 */
function findOdd(A) {
    const cnt = {}
    for (let el of A) {
        if (cnt[el] == undefined) {
            cnt[el] = 1
        } else {
            cnt[el] += 1
        }
    }
    for (let key in cnt) {
        if (cnt[key] % 2 == 1) {
            return parseInt(key)
        }
    }
}
