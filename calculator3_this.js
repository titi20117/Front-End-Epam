    var calculator = {
        initValue : function (operation, currentState) {
            this.operation = operation;
            this.currentState = currentState;
            
            this.sum = function sum(args) {
                this.currentState += args;
            return this.currentState;      
            };

            this.div = function div(args){
                if (this.currentState === 0) {
                    this.currentState = args;
                } else {
                    if (args === 0) {
                        this.currentState = "Операция не возможно!"
                    } else {
                        this.currentState /= args;    
                    }
                }
                return this.currentState;
            };
            this.dif = function dif(args){
                if (this.currentState === 0) {
                      this.currentState = args;
                  } else { 
                       this.currentState -=args;
                  }
                   return this.currentState;
            };
            this.mul = function mul(args){
                  if (this.currentState === 0) {
                      this.currentState = args;
                  } else {
                      this.currentState *= args;
                  }
                   return this.currentState;
            };
            this.getResult = function () {
                  return this.currentState;
            };
            this.reset = function reset(){
                  return this.currentState = 0;
            } 
        },
        decription: function () {
            var describe = "Операция " + this.operation + " : " + this.currentState;
            return describe;
        }       
}

console.log("------------------------------------------------");
var summa = Object.create(calculator);
summa.initValue("Сложение", 10);
console.log(summa.decription());
summa.sum(44);
console.log(summa.decription());
summa.div(5);
console.log(summa.decription());
console.log("------------------------------------------------");
summa.initValue("summa:", 0);
summa.sum(5);
console.log(summa.decription());
console.log("------------------------------------------------");
summa.initValue("division:", 20);
summa.div(5);
console.log(summa.decription());
console.log("------------------------------------------------");
