function identicalElement(params) {
    var answer, realAnswer;
    for (var i = 0; i < params.length - 1; i++) {
        if (params[i] == params[i+1]) {
            answer = params[i] == params[i+1];
        } else {
            answer = params[i] == params[i+1];
        }
    }
    if (answer) {
        realAnswer = console.log(answer);
    } else {
        realAnswer = console.log(answer);
    }
    return realAnswer;
}

var myFirstArray = [1, 7, 1];
var mySecondArray = ["fernand", "fernand", "fernand"];
identicalElement(myFirstArray);
identicalElement(mySecondArray);