/**
 * Returns a list of the sizes of the squares that together form the rectangle
 * Official solution requires iterative solution because of the requirement
 * to return null if initial params are equal (square is sent into function),
 * which can't be tracked recursively. That solution is given in the other function.
 * @param {int} height - height of the rectangle
 * @param {int} width - width of the rectangle
 */
function squareInRect(height, width) {
    if (height == width) {
        return [height]
    }

    let arr = []

    arr.push(height < width ? height : width)
    let new_height = height < width ? height : height - width
    let new_width = width < height ? width : width - height

    return arr.concat(squareInRect(new_height, new_width))
}

// Official solution
function sqInRect(height, width) {
    if (height == width) return null

    let arr = []

    while (height > 0 && width > 0) {
        arr.push(height < width ? height : width)
        let new_height = height < width ? height : height - width
        let new_width = width < height ? width : width - height
        height = new_height
        width = new_width
    }
    return arr
}
