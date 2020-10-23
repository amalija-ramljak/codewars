/**
 * Finds the longest concatenated string of k consecutive strings in array
 * @param {Array} strarr - array of strings
 * @param {int} k - number of consecutive strings to concatenate
 */
function longestConsec(strarr, k) {
    if (k < 1) {
        return ''
    }
    let str = ''
    for (let i = 0; i <= strarr.length - k; i++) {
        let sliced = strarr.slice(i, i + k)
        if (sliced.length > 0) {
            let new_str = sliced.reduce((t, s) => t + s)
            if (new_str.length > str.length) {
                str = new_str
            }
        }
    }
    return str
}
