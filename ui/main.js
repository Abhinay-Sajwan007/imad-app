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


var btn = document.getElementById('counter');

btn.onclick = function(){
    //make a request to another endpoint 
    
    
    //captures a response and store it in a variable
    
    
    //Reb=nder it in a correct span
    
    
};

