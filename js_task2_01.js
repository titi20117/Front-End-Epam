function typeOfParams(params) {
    var argument, x;
    if (typeof params == typeof "tip") {
        argument = console.log("Это строка");
    } else if (typeof params == typeof 4) {
        argument = console.log("Это число");
    } else if (typeof params == typeof x/2){
        argument = console.log("Это не строка не число");
    }
    return argument;
}
var a;
typeOfParams(14);
typeOfParams("tip");
typeOfParams(a/114);
// console.log(typeOfParams("car"));