//Удаление все текстовые узлов
function deleteTextNodes(element) {
//Смотрим количество NODES
    for (var i = 0; i < element.childNodes.length; i++) {
        var subElement = element.childNodes[i];
        if (element.childNodes[i].nodeType === element.TEXT_NODE) {
            element.removeChild(element.childNodes[i]);
        } else {
             deleteTextNodes(subElement);
        }
    }
}
deleteTextNodes(document.body);
