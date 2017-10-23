//confirm the ending
function confirmEnding(str, target) {
    if (str.substr(-1, 1) === target){
      str = console.log(true);
    } else {
      str = console.log(false);
    }
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");
