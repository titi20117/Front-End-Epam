function maxElements(params) {
    var maxElement = params[0];
    for (var i = 1; i < params.length; i++) {
        if (maxElement < params[i]) {
            maxElement = params[i];
        } else {
            maxElement = maxElement;
        }
    }
    return maxElement;   
}
var myArray = [25, 40, 70, 15];
console.log("Максимально значение: " + maxElements(myArray));

