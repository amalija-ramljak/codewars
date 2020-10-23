/**
 * Takes number of seconds and converts into specified format
 * @param {int} s - number of seconds
 * @returns {string} - formatted human readable time e.g. "1 year, 2 days, 15 minutes and 1 second"
 */
function formatDuration(s) {
    if (s == 0) {
        return 'now'
    }
    let time = []
    let seconds = s % 60
    let minutes = Math.floor(s / 60)
    seconds = seconds > 0 ? `${seconds} second${seconds == 1 ? '' : 's'}` : null
    let hours = Math.floor(minutes / 60)
    minutes = minutes % 60
    minutes = minutes > 0 ? `${minutes} minute${minutes == 1 ? '' : 's'}` : null
    let days = Math.floor(hours / 24)
    hours = hours % 24
    hours = hours > 0 ? `${hours} hour${hours == 1 ? '' : 's'}` : null
    let years = Math.floor(days / 365)
    days = days % 365
    days = days > 0 ? `${days} day${days == 1 ? '' : 's'}` : null
    years = years > 0 ? `${years} year${years == 1 ? '' : 's'}` : null
    time = [years, days, hours, minutes, seconds].filter((e) => e !== null)
    if (time.length == 1) return time[0]
    let end = ` and ${time.pop()}`
    return time.join(', ') + end
}
