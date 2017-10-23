
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num <= 3 && num < str.length){
        str = str.slice(0, num);
        str = "".concat(str, "...");
      } else if(num > 3 && num < str.length) {
        str = str.slice(0, num - 3);
        str = "".concat(str, "...");
      } else {
      str = str.slice(0, str.length);
    }
    return console.log(str);
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 15);
  