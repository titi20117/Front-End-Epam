function dropElements(arr, func) {
    return console.log(arr.slice(arr.findIndex(func) >=0 ? arr.findIndex(func): arr.length, arr.length));
}

dropElements([1, 6, 2, 3, 4], function(n) {return n>=1;});