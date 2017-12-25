
        function calculator(name, currentState) {
            this.name = name;
            this.currentState = currentState;
        }
        
        calculator.prototype.sum = function sum(args) {
            this.currentState += args;
        return this.currentState;      
        }

        calculator.prototype.div = function div(args){
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
        }
        calculator.prototype.dif = function dif(args){
                if (this.currentState === 0) {
                      this.currentState = args;
                  } else { 
                       this.currentState -=args;
                  }
                   return this.currentState;
            };
        calculator.prototype.mul = function mul(args){
                  if (this.currentState === 0) {
                      this.currentState = args;
                  } else {
                      this.currentState *= args;
                  }
                   return this.currentState;
            }
            calculator.prototype.getResult = function () {
                  return this.currentState;
            }
        calculator.prototype.reset = function reset(){
                  return this.currentState = 0;
            } 
         calculator.prototype.decription = function () {
            var describe = "Операция " + this.operation + " : " + this.currentState;
            return describe;
        }       



        function extendedCalc(name, currentState) {
            calculator.apply(this, args);
        }

        extendedCalc.prototype = Object.create(calculator.prototype);
        extendedCalc.prototype.constructor = extendedCalc;
        
        extendedCalc.prototype.logarith = function () {
            this.currentState = Math.log(this.currentState)
            return this.currentState;
        }
        extendedCalc.prototype.powerX = function (args) {
            this.currentState = Math.pow(this.currentState, args);
        }

