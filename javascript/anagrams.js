/**
 * Takes list of string and returns it filtered into only anagrams of the reference string
 * @param {string} word - string whose anagrams we are looking for
 * @param {Array} words - list of words to check for word's anagrams
 */
function anagrams(word, words) {
    let ans = []
    let cnt = {}
    for (let l of word) {
        cnt[l] = cnt[l] ? cnt[l] + 1 : 1
    }
    for (let w of words) {
        if (w.length == word.length) {
            let is_an = true
            let cntw = {}
            for (let i = 0; i < w.length; i++) {
                cntw[w[i]] = cntw[w[i]] ? cntw[w[i]] + 1 : 1
            }
            for (let key in cnt) {
                if (cntw[key] == undefined || cntw[key] != cnt[key]) {
                    is_an = false
                    break
                }
            }
            if (is_an) {
                ans.push(w)
            }
        }
    }
    return ans
}
