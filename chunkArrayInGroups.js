
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr1 = [];
    for (var i = 0; i < arr.length; i += size) {
        arr1.push(arr.slice(i, i+size));
    }
    return console.log(arr1); 
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  