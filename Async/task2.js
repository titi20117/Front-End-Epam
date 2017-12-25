function sendAjax(url) {
    return new Promise ((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.addEventListener("load", () => {
            resolve(xhr.response);
        });
        xhr.addEventListener("error", () => {
            reject(xhr);
        });
        xhr.send();
        })     
}

function sortCity(params) {
    return params.sort(function (param1, param2) {
        var city1 = param1["name"];
        var city2 = param2["name"];
        if (city1 < city2) return -1;
        if (city1 > city2) return 1;
        else return 0;
    });
}

function showCities(obj) {

    let listCity = document.querySelector('.city__list');

    if (!listCity) {
        listCity = document.createElement('ul');
        let container = document.querySelector('.citizen');
        listCity.classList.add('city__list');
        container.appendChild(listCity);
    } else {
        listCity.innerHTML = "";
    }

    for({name} of obj) {
        let element = document.createElement('li');
        element.classList.add('city__item');
        element.innerText = name;
        listCity.appendChild(element);
    }
}

export {sendAjax, sortCity, showCities}