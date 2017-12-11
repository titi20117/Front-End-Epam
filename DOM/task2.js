//Удаление все текстовые узлов

function deleteTextNodes(element) {
    //Смотрим количество NODES
    console.log(element.childNodes.length);

    for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].nodeType === element.TEXT_NODE) {
            element.removeChild(element.childNodes[i]);
        }
    }
    //Проверяем удалили ли TEXT_NODES
    return console.log(element.childNodes.length);
}
deleteTextNodes(document.body);