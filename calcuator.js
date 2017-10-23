var calculator = function (firstNumber) {
    var getObj = {
        sum : function(){
            var answer = firstNumber;
            for (var i = 0; i< arguments.length; i++) {
                answer += arguments[i];
            }
            return console.log("Сумма = " + answer);
        },
        dif : function(){
            var answer = firstNumber;
            for (var i = 0; i< arguments.length; i++) {
                answer =answer - arguments[i];
             }
             return console.log("Вычитание = " + answer);
        },
        div : function(){
            var answer = firstNumber;
            for (var i = 0; i< arguments.length; i++) {
                if (arguments[i] === 0) {
                    answer = "Операция не возможно!"
                } else {
                    answer /= arguments[i];    
                }
             }
             return console.log("Деление = " + answer);
        },
        mul : function(){
            var answer = firstNumber;
            for (var i = 0; i< arguments.length; i++) {
                answer *= arguments[i];
             }
             return console.log("Умножение = " + answer);
        }
    }    
    return getObj;
}

var myCalculator = calculator(100);
myCalculator.sum(1, 2, 3);
myCalculator.dif(10, 20);
myCalculator.div(2, 2);
myCalculator.mul(2, 2);