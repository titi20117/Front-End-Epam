var calculator = function () {
    var currentState = 0;
    var getObj = {
        // sum : function(){
        //     for (var i = 0; i < arguments.length; i++) {
        //         currentState += arguments[i];
        //     }
        //     return console.log("Сумма = " + currentState);
        // },
        dif : function(){
            if (currentState === 0) {
                currentState = arguments[0];
                console.log(currentState);
                for (var i = 1; i < arguments.length; i++) { 
                    currentState -=arguments[i];
                 }    
            } else {
                for (var i = 0; i < arguments.length; i++) { 
                    currentState -=arguments[i];
                 }
            }
            
             return console.log("Вычитание = " + currentState);
        },
        div : function(){
            if (currentState === 0) {
                currentState = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    if (arguments[i] === 0) {
                        currentState = "Операция не возможно!"
                    } else {
                        currentState /= arguments[i];    
                    }
                 }
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] === 0) {
                        currentState = "Операция не возможно!"
                    } else {
                        currentState /= arguments[i];    
                    }
                 }
            }
            return console.log("Деление = " + currentState);
        },
        mul : function(){
            if (currentState === 0) {
                currentState = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    currentState *= arguments[i];
                 }
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    currentState *= arguments[i];
                 }
            }
           
             return console.log("Умножение = " + currentState);
        },
        reset : function(){
            return currentState = 0;
        },
        
        sum : function sum(a) {
            if (currentState === 0) {
                currentState = a;
                function f(b) {
                  currentState += b;
                  return f;
                }
                f.toString = function() {
                  return console.log(currentState);
                };
              
                return f;
              }  else {
                function f(b) {
                  currentState += b;
                  return f;
                }
                f.toString = function() {
                  return console.log(currentState);
                };
              
                return f;
              }
            
        }
              
    }    
    return getObj;
}


var myCalculator = calculator();
// console.log("вычислим сумму чисел :");
// myCalculator.sum(1, 2, 3);
console.log("\nвычислим вычитание чисел :");
myCalculator.dif(30, 20);
console.log("\nReset");
console.log(myCalculator.reset());
console.log("\nвычислим деление чисел :");
myCalculator.div(6, 2);
console.log("\nВычислим умножение чисел :");
myCalculator.mul(2, 2);
console.log("\nReset");
console.log(myCalculator.reset());
console.log("\nВычислим умножение чисел :");
myCalculator.mul(4, 2);
// console.log("вычислим сумму чисел :");
// myCalculator.sum(1, 2, 3);
console.log("\nвычислим деление чисел :");
myCalculator.div(6, 2);
console.log("\nВычислим умножение чисел :");
myCalculator.mul(2, 2);
myCalculator.sum(5)(9)(8)(0);