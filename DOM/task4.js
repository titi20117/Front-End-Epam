var container = {
    tags : {},
    classNames : {},
    texts: {}
};

function addTags(element) {
    if (element.nodeType == 1) {
        if (container.tags[element.tagName.toLocaleLowerCase()]) {
            container.tags[element.tagName.toLocaleLowerCase()] += 1;
        } else {
            container.tags[element.tagName.toLocaleLowerCase()] = 1;
        }
    }
}

function addTexts(element) {
    if (element.nodeType == 3) {
        if (container.texts["text"]) {
            container.texts["text"] += 1;
        } else {
            container.texts["text"] = 1;
        }
    }
}

function addClassNames(element) {
    if (element.classList) {
        for (var i = 0; i < element.classList.length; i++) {
            if (container.classNames[element.classList[i]]) {
                container.classNames[element.classList[i]] += 1;
            } else {
                container.classNames[element.classList[i]] = 1;
            }
        }
    }
}

function countElement(element) {
    addTags(element);
    addClassNames(element);
    addTexts(element);  
}

function description(obj, element) {
    
    console.log('.................debut',element.nodeName,'.........................');
    for (var key in obj.tags) {
        console.log('Тэгов',key,':', obj.tags[key])
    }
    for (var key in obj.texts) {
        console.log('Текстовых узлов:', obj.texts[key])
    }
    for (var key in obj.classNames) {
        console.log('Элементов с классом',key,':', obj.classNames[key])
    }
    console.log('................fin',element.nodeName,'............................');
}

function scanDom(element) {
    for (var i = 0; i < element.childNodes.length; i++) {
        var subElement =  element.childNodes[i];
        countElement(element);
        if (subElement.childNodes) {
            scanDom(subElement); 
        }
    }
    return description(container, element);
}

scanDom(document);