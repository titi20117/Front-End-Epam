function numString(params1, params2) {
    var numStringSlice, answer;
    if (params1.length > params2) {
        numStringSlice = params1.slice(0, params1.length - params2);
        answer = "".concat(numStringSlice, "...");
    }
    return console.log(answer);
}
numString("abcdefg", 5);