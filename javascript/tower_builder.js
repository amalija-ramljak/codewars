/**
 * Centers tower floor by padding left and right with ' ' to width.
 * @param {string} elements - string for tower floor without padding
 * @param {int} width - width of the tower
 */
function pad(elements, width) {
    let pad = (width - elements.length) / 2
    let e = ' '.repeat(pad)
    return e + elements + e
}

/**
 * Creates strings that form a tower.
 * Each floor has an odd number of elements.
 * Upper floors are padded to width.
 * @param {int} nFloors - number of floors for the tower
 */
function towerBuilder(nFloors) {
    let width = 2 * nFloors - 1
    let tower = []
    for (let from_up = 1; from_up <= nFloors; from_up++) {
        let elements = '*'.repeat(from_up * 2 - 1)
        tower.push(pad(elements, width))
    }
    return tower
}
