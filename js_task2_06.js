"use strict";
function simpleNumber(params) {
    var num = params, sumRestDiv = 0;
    var firstAnswer;
    if (num > 0 && num <= 1000) {
        for (var i = 1; i <= num; i++){
            if (num % i === 0) {
                sumRestDiv += 1;                
            }
        }
        if (sumRestDiv < 3) {
            firstAnswer = num + " простое число";
        } else {
            firstAnswer = num + " составное число";
        }   
    } else {
        firstAnswer = "Неверные данные";
    }
    return console.log(firstAnswer);
}

console.log("\nпроверяем является пристым или составным !\n")
simpleNumber(999);
simpleNumber(1000);
simpleNumber(1001);
simpleNumber(5000);
simpleNumber(111);
simpleNumber(1);
simpleNumber(5);
simpleNumber(101);
