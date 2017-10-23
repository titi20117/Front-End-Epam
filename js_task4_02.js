function bigLetter(params){
    var big = params.charAt(0).toUpperCase();
    return console.log(params.replace(params.charAt(0), big));
}
bigLetter("abc");