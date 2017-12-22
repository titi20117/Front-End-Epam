(function fakeDragnDrop(){
    
        var
            activeEl, div, btn, offsetX, offsetY;
    
    
        function getRandomPosition(element) {
            var x = document.body.offsetHeight-element.clientHeight;
            var y = document.body.offsetWidth-element.clientWidth;
            var randomX = Math.floor(Math.random()*x);
            var randomY = Math.floor(Math.random()*y);
            console.log(x);
            console.log(y);
            return [randomX,randomY];
        }
    
        function generatedDiv(){
            div = document.createElement('div');
            var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            var  width = (Math.floor(Math.random()*600));
            var height = (Math.floor(Math.random()*600));
    
            console.log('width'+width);
            console.log('height'+height);
    
            var xy = getRandomPosition(div);
            div.style.background = col;
            div.style.width = 300 ;
            div.style.height = 400 ;
            document.body.appendChild(div);
            div.style.top = xy[0] + 'px';
            div.style.left = xy[1] + 'px';
    
        }
    
        function goDown(e) {
            activeEl = e.target;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
    
        }
        function goUp(e) {
            activeEl = null;
        }
    
        function goMove(e) {
            if (activeEl) {
                activeEl.style.top = (e.clientY - offsetY) + 'px';
                activeEl.style.left = (e.clientX - offsetX) + 'px';
            }
        }
    
        btn = document.querySelector('ramdomDiv');
        div = document.getElementsByTagName('div');
    
        btn.addEventListener("click", generatedDiv);
    
        document.addEventListener("mousedown", goDown);
        document.addEventListener("mouseup", goUp);
        document.addEventListener("mousemove", goMove);
    
    })();