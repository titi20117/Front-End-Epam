function mutation(arr) {
    console.log(arr[1].length);
    var arr1 = arr[0];
    var arr2 = arr[1];
    var arr2Length = arr2.length;
    for (var i = 0; i < arr2Length; i++){
        if (arr1.toLowerCase().indexOf(arr2[i].toLowerCase()) === -1){
          return console.log(false);
        } else {
          arr = true;
        }
      
      }
    return console.log(arr);
  }
  
  mutation(["hello", "Leo"]);
 