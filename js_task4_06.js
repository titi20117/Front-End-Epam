function camelCase(params) {
    var input = params.split("");
    input.forEach(function(element, position, self) {
        if (element == " ") {
            self.splice(position, 2 , self[position+1].toUpperCase());
        }
    }, this);
    // var word = concat()
    return console.log(input.join(""));
}
camelCase("user object");