console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value'


var img = document.getElementById('madi');
//move the image
/*
img.onclick = function(){
    img.style.marginLeft='100px'
}
*/


// animation

var marginleft = 0;

function moveRight(){
    
    marginleft = marginleft + 1;
    img.style.marginLeft = marginleft+'px';
    
}
img.onclick = function(){
    var interval = setInterval(moveRight,50)
}

