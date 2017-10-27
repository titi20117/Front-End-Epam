function myFunction(params1, params2, params3){ 
    var myString1, myString2, myString3;
    var myString = params1.split(" ");
    myString1 = myString.slice(0, params3 + 1);
    myString2 = myString.slice(params3 + 1);
    myString3 = myString2.join(" ");
    myString1.push(params2);
    myString1.push(myString3);
    return console.log(myString1.join(" "));
}
myFunction("I am cool like a baby", "sexy", 4);
