// import { makeProperPrice } from "../../utils/properPrice";

// too lazy to clarify the code, just going to make another pass - standard
const firstProperPrice = (price) => {
    let s = String(price).split(".")
    if (s.length === 1) return s[0] + ".00"
    if (s[1].length === 1) return s[0] + "." + s[1] + "0"
    else return s[0] + "." + s[1]
}

export const makeProperPrice = (price) => {
    let s = firstProperPrice(price)

    let s2 = String(s).split(".")
    // return s
    if (s2[1].length > 2) return s2[0] + "." + s2[1].split("")[0] + s2[1].split("")[1]
    else return s
}
