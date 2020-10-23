/**
 * Finds the divisors of the given integer or returns a string saying it is prime
 * @param {int} integer
 */
function divisors(integer) {
    const divs = []
    for (let i = 2; i <= integer / 2; i++) {
        if (integer % i == 0) divs.push(i)
    }
    return divs.length > 0 ? divs : `${integer} is prime`
}
