/*console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value'


var img = document.getElementById('madi');
//move the image

img.onclick = function(){
    img.style.marginLeft='100px'
}



// animation

var marginleft = 0;

function moveRight(){
    
    marginleft = marginleft + 1;
    img.style.marginLeft = marginleft+'px';
    
}

img.onclick = function(){
    var interval = setInterval(moveRight,50)
}
*/



var btn = document.getElementById('counter');
var counter = 0;
btn.onclick = function(){
    //make a request to another endpoint 
    
    
    //captures a response and store it in a variable
    
    
    //Render it in a correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};

