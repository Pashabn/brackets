module.exports = function check(str, bracketsConfig) {
    const check = (x, y = bracketsConfig.map(i => i.join('')).filter(i => x.includes(i))) => {
        if (!y.length) return false
        for (let i = 0; i < y.length; i++) {
            x = x.replace(y[i], '')
        }
        return !x ? true : check(x)
    }
    return check(str)
}

