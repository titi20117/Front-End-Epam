function elements(params) {
    var pairNumbers = oddNumbers = nullNumbers = 0, answer;
    for (var i = 0; i < params.length; i++){
        var element = params[i];
        if (element != 0) {
            if (element %2 == 0) {
                pairNumbers += 1;
            } else {
                oddNumbers += 1;
            }
        } else {
            nullNumbers += 1;
        }
    }
    if (nullNumbers != 0) {
        answer = console.log("нечётные: " + oddNumbers + ";" + " четные: " + pairNumbers + ";" + " Нуль: " + nullNumbers);    
    } else {
        answer = console.log("нечётные: " + oddNumbers + ";" + " четные: " + pairNumbers);    
    }
    return answer;      
}
var myFirstArray = [1, 3, 7, 4, 5, 8, 2]; 
var mySecondArray = [1, 4, 7, 4, 5, 0, 2, 0];
elements(myFirstArray);
elements(mySecondArray);