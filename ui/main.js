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




//counter code
var btn = document.getElementById('counter');

btn.onclick = function(){
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //captures a response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
                
            }
        }
        //not done yet
    };
    
   //Make the request
   request.open('GET','http://abhinaysajwan.imad.hasura-app.io/counter',true);
   request.send(null)
};



 /*Render it in a correct span
    counter = counter +1;*/


//submit Name
var nameInput = document.getElementById('name');
var  name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclickc = function(){
    //make request to the server and the name 
    //capture a list of names and render it as a list
    var names = ['Name1','Name2','Name3'];
    var list = ''
}
}

