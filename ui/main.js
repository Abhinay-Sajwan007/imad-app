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



/*
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
   request.send(null);
};






//submit Name
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  
    //make request to the server and the name 
  
        //create a request object
    var request = new XMLHttpRequest();
    
    //captures a response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                //capture a list of names and render it as a list
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    
                    for(var i=0;i<names.length;i++){
                            list += '<li>'+ names[i] + '</li>';
                          
                        }
            var ul = document.getElementById('namelist');
            ul.innerHTML=list;
          }
        }
        //not done yet
   
    };
    
   //Make the request
   var nameInput = document.getElementById('name');
   var name = nameInput.value;
   request.open('GET','http://abhinaysajwan.imad.hasura-app.io/submit-name?name='+name,true);
   request.send(null);
    
};

*/




//submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200){
                console.log('user logged in');
                alert('Logged in successfully');
            }
            else if(request.status === 403)
            {
                alert('username/password is incorrect');
            }
            else if(request.status === 500)
            {
                alert('Something went wrong on the server');
            }
        }
        //not done yet
   
    };
    
   //Make the request
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
  
     
     
  console.log(username);
  console.log(password);
  
   request.open('POST','http://abhinaysajwan.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username:username,password:password}));
    
};
