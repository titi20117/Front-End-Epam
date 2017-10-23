function capitalWords(params) {
    var words, answer;
    var arrayStrings = params.split(" ", params.length);
    console.log(arrayStrings[0]);
    for (var i = 0; i < arrayStrings.length; i++) {
        answer = arrayStrings[i].replace(params[0], params[0].toUpperCase());
        
    }
    return console.log(answer);
}
var tempeString = "I am cool";
// var espace = " ";
capitalWords(tempeString);