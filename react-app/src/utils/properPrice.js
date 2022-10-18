export const makeProperPrice = (price) => {
    let s = String(price).split(".")
    if (s.length === 1) return s[0] + ".00"
    if (s[1].length === 1) return s[0] + "." + s[1] + "0"
    else return s[0] + "." + s[1]
}
