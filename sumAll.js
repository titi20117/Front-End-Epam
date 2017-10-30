function sumAll(params) {
    var max = Math.max(params[0], params[1]);
    var min = Math.min(params[0], params[1]);
    var sum = 0;
    for (var i = min; i <= max; i++) {
        sum += i;
    }
    return console.log(sum);
}

sumAll([1, 4]);