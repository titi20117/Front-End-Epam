function simpleNumber(params) {
    var num = params;
    var firstAnswer, secondAnswer;
    if (num <= 1000) {
        for (var i = 2; i <= num - 1; i++) {
            var restNumber = 0;
            restNumber = num % i;
            switch (restNumber) {
                case 0:
                    firstAnswer = "составное число";                
                    break;
                default:
                    firstAnswer = "простое число";                
                    break;
            }
            // if (restNumber == 0) {
            //     firstAnswer = console.log("составное число");
            // } else {
            //     secondAnswer = console.log("простое число");     
            // }    
            
        }

    } else {
        firstAnswer = "Неверные данные";
    }
    return console.log(firstAnswer);
}
simpleNumber(100);