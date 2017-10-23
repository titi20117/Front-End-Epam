function elements(params) {
    for (var i = 0; i < params.length; i++){
        var element = params[i];
        console.log(element);
    }
    return params.length;
}
var myArray = [1, 4, 7, 4, 5];
console.log("Число Элементов: " + elements(myArray));