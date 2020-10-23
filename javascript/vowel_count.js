/**
 * Finds the number of vowels in a string
 * @param {string} str
 */
function getCount(str) {
    let vowelsCount = 0
    const v = 'aeiou'

    for (let letter of str) {
        vowelsCount += v.includes(letter) ? 1 : 0
    }

    return vowelsCount
}
