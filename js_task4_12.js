function getRandomInt(min, max) {
    var minMax = Math.floor(Math.random() * (max - min)) + min;
    return console.log(minMax);
}
getRandomInt(1, 5);