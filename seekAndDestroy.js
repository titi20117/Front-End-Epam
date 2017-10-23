
function destroyer(arr) {
    var args = arguments;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return console.log(arr.filter(Boolean));
  }
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  