function capitalWords(params) {
    var answer = '';
    var arrayStrings = params.toLowerCase().split(" ", params.length);
    for (var i = 0; i < arrayStrings.length; i++) {
        arrayStrings[i] = arrayStrings[i].replace(arrayStrings[i][0], arrayStrings[i][0].toUpperCase());
        answer +=arrayStrings[i] + " ";
   }
    return console.log(answer);
}
var tempeString = "I am COOL like a ganster";
capitalWords(tempeString);
