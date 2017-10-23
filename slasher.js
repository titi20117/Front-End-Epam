
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if (howMany >= arr.length) {
      arr = [];
    } else {
      arr = arr.slice(howMany);
    }
    return console.log(arr);
  }
  
  slasher([1, 2, 3], 2);
  