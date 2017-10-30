function diffArray(params1, params2) {
    var newArr = [];

    function searchElement(arg1, arg2) {
        for (var i = 0; i < arg1.length; i++) {
            if (arg2.indexOf(arg1[i]) === -1) {
                newArr.push(arg1[i]);
            }
            
        }
    }
    searchElement(params1, params2);
    searchElement(params2, params1);
    return console.log(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
