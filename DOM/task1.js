// Добаьвлене перед первый элемент
function prepend(element1, element2) {
    return document.body.insertBefore(element2, element1);
}
var mySpan = document.getElementById("first");
var newSpan = document.getElementById("second");    
prepend (mySpan, newSpan);


