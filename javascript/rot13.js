/**
 * Implement rot13, the simple cipher (Caesar's)
 * @param {string} message - message to cipher
 */
function rot13(message) {
    message = message.split('')
    const small = 'abcdefghijklmnopqrstuvwxyz'
    const upper = small.toUpperCase()
    for (let i = 0; i < message.length; i++) {
        if ((small + upper).includes(message[i])) {
            message[i] = small.includes(message[i])
                ? small[(small.indexOf(message[i]) + 13) % small.length]
                : upper[(upper.indexOf(message[i]) + 13) % upper.length]
        }
    }
    return message.join('')
}
