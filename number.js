//Return Largest Number in Arrays
function largestOfFour(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      var largestNumber = arr[i][0];
      for (var j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        } else {
            largestNumber = largestNumber;
        }
      }
  
      results[i] = largestNumber;
    }
  
    return console.log(results);
  }  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  