module.exports = reverse = (n) => {
    if (n[0] === "-") {
        n = n.replace("-", "");
    }
    n.toString().split("").reverse().join("");
};
