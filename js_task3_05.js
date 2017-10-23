var location = {
    house: 3,
    country: "Russia",
    town: "Ryazan",
    street: "gagarina",
    vipRoom: true
};
function copyObject(params) {
    var copy;
    for (var key in location) {
       params[key] = location[key];
    }
    copy = console.log(params);
    return copy;
}
var newLocation = {};
copyObject(newLocation);