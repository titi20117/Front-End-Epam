function strRepeat(params) {
    for (var i = 0; i < params.length; i++) {
        var element1, element2, element3;
        var num = 0;
        if (element1 == params[i]) {
            console.log(element1);
            num += 1;
            if (element1 == params[i+1]) {
                num +=1;
            } 
        }
        if (params[i] == params[i+1]) {
            num += 1;
            
        }
        
    }
    return console.log(num);
}
strRepeat("abbac");