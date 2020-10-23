/**
 * Finds the first n elements of a generalized Fibonacci sequence
 * The signature are the first x elements of the sequence,
 * and the number of summed elements for the next one
 * is the length of the signature.
 * @param {Array} signature
 * @param {int} n
 */
function Xbonacci(signature, n) {
    const x = signature.slice(0, n)
    let sum = 0
    if (x.length > 0) {
        sum = x.reduce((t, n) => t + n)
    }
    for (let i = signature.length; i < n; i++) {
        x.push(sum)
        sum = sum + sum - x[i - signature.length]
    }
    return x
}
