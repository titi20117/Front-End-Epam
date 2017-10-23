
function repeatStringNumTimes(str, num) {
    if (num < 0){
      num = 0;
    }
    return str.repeat(num);
  }
  
  repeatStringNumTimes("abc", 3);
  