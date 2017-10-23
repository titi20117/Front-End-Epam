var location = {
    house: 3,
    country: "Russia",
    town: "Ryazan",
    street: "gagarina",
    vipRoom: true
};
function verify(paramLine, paramObject) {
    var answer;
    if (paramLine in paramObject) {
        answer = console.log(paramObject);
    } else {
        paramObject[paramLine] = "new";
        answer = console.log(paramObject);
    }
    return answer;
}
verify("department", location);