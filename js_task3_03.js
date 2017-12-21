var location = {
    house: 3,
    country: "Russia",
    town: "Ryazan",
    street: "gagarina",
    vipRoom: true
};
function verify(paramLine, paramObject) {
    var answer; 
    if (paramLine in paramObject) {
        answer = true;
    } else {
        answer = false;
    }
    return console.log(answer);
}
verify("town", location);  
// function verify(paramLine, paramObject){
//     var answer;
//     for (paramLine in paramObject) {
//         if (paramObject.hasOwnProperty(paramLine)) {
//             answer = true;
//         } else {
//             answer = false;
//         }
//     }
//     return console.log(answer);
// }
// verify("twn", location);  