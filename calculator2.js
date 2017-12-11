var calculator = function () {
    var currentState = 0;
    var getObj = {
        sum : function sum(args){
            currentState += args;
            return sum;
        },
        dif : function dif(args){
            if (currentState === 0) {
                currentState = args;
            } else { 
                 currentState -=args;
            }
             return dif;
        },
        div : function div(args){
            if (currentState === 0) {
                currentState = args;
            } else {
                if (args === 0) {
                    currentState = "Операция не возможно!"
                } else {
                    currentState /= args;    
                }
            }
            return div;
        },
        mul : function mul(args){
            if (currentState === 0) {
                currentState = args;
            } else {
                currentState *= args;
            }
             return mul;
        },
        getResult : function getResult() {
            return currentState;
        },
        reset : function reset(){
            return currentState = 0;
        },         
    }    
    return getObj;
}


var myCalculator = calculator();
console.log("\nвычитание чисел :");
myCalculator.dif(30);
console.log(myCalculator.getResult());
console.log("\nReset");
console.log(myCalculator.reset());
console.log("\nделение чисел :");
myCalculator.div(6)(2);
console.log(myCalculator.getResult());
console.log("\nСуммы чисел :");
myCalculator.sum(5)(9)(8)(0);
console.log(myCalculator.getResult());
