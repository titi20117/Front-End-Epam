function uniteUnique(param1, param2, param3) {
    var unitParams = [];
    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];
        for (var j = 0; j < arrayArguments.length; j++) {
            var valueOfArrayArguments = arrayArguments[j];
            if (unitParams.indexOf(valueOfArrayArguments) < 0) {
                unitParams.push(valueOfArrayArguments);
            }
        }
    } 
    return console.log(unitParams);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);