var deepCloning = function deepCloning(startObject) {
  //creating var for the copy object
  var newObject = {};
  //cloning object
  for (var firsKey in startObject) {
    var innerObject = {};
    var objectProperty = startObject[firsKey];
    //if object have property like an object, let's doing deep cloning inside a recursion function
    if (typeof(objectProperty) == "object") {
      var myfunc = function myfunc(objectProperty){
        for (var secondKey in objectProperty) {
          innerObject[secondKey] = objectProperty[secondKey];
        }
        return myfunc;              
      }
    //otherwise, we don't need deep cloning
    } else {
      innerObject = objectProperty;
    }
    //we can get copy object
    newObject[firsKey] = innerObject;
  }
  return newObject;
}

var obj = { a:1, b:{ c:0 }, e:{ f:{ g:1 } }, h:{ i:{ j:{ k:1 } } } };
copyObj = deepCloning(obj);
console.log(obj.b === copyObj.b); 
console.log(obj.e === copyObj.e); 
console.log(obj.e.f === copyObj.e.f);
