module.exports = function reverse (n) {
    let reverse= Math.abs(n).toString().split('').reverse().join('')
    return +reverse
}
