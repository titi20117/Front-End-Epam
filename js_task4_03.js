function findLine(params1, params2) {
    var str = params1;
    var lineFinded = console.log(str.includes(params2));
    return lineFinded;
}
findLine("I love cats", "cats");