var object = {
    a: 1,
    b: 2,
    c: 3
};
function prototip(property, obj) {
    for (var key in object) {
        if (key == property) {
            console.log(true); continue;
        } console.log(false);
    }  
}
var newObject = Object.create(object);
prototip("c", newObject);