module.exports = function reverse(n) {
    let numToStr = n.toString();
    if (numToStr[0] === "-") {
        numToStr = numToStr.replace("-", "");
    }
    let resalt = "";
    for (let i = 0; i < numToStr.length; i++) {
        resalt = `${numToStr[i]}${resalt}`;
    }
    return +resalt;
};
