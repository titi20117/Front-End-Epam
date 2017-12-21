
// обработка события клик на заголовок аккордиона
var accordion = document.getElementsByClassName('accordion__list_item_title');

for(var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = clickOnHeader;
};
// функция скрывающая или отображающая контент аккордиона
function clickOnHeader (e) {
    var _this = this,
        computedStyleThisElem = getComputedStyle(_this.nextElementSibling);
    var accordionListinners = document.getElementsByClassName('accordion__list_inner');
    function hideAllContent() {
        for(var i = 0; i < accordionListinners.length; i++) {
            accordionListinners[i].style.display = 'none';
        }
    }
    
    if ( computedStyleThisElem.display === 'block' ) {
        hideAllContent();
        _this.nextElementSibling.style.display = 'none';
    } else if ( computedStyleThisElem.display === 'none' ) {
        hideAllContent();
        _this.nextElementSibling.style.display = 'block';
    }
};
