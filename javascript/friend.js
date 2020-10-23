/**
 * Filters the given array by the rule that friends have the length of 4
 * @param {Array} friends - list of strings
 */
function friend(friends) {
    return friends.filter((el) => el.length == 4)
}
