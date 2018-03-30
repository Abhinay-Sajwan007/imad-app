var express = require('express');
var morgan = require('morgan');
var Pool = require('pg').Pool;
var path = require('path');
var crypto = require('crypto');

var config = {
    user:'abhinaysajwan',
    database : 'abhinaysajwan',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD,
};
 
var app = express();
app.use(morgan('combined'));


/*
var  articles = {
 'article-one' : {
  title: 'Article One | Abhinay Sajwan',
  heading : "Hi!You're on the Article-One.",
  date: 'March 18,2018',
  content:`
<p>This is the content for first article.This is the content for first article.This is the content for first article.This is the content for first article.</p>
<p>This is the 2nd content for first article.This is the 2nd content for first article.This is the 2nd content for first article.This is the 2nd content for first article.</p>
`
},
 'article-two' :{
  title: 'Article Two | Abhinay Sajwan',
  heading : "Hi!You're on the Article-Two.",
  date: 'March 19,2018',
  content:`
    <p>This is the content for second article. `
},
 'article-three' :{
  title: 'Article Three | Abhinay Sajwan',
  heading : "Hi!You're on the Article-Three.",
  date: 'March 19,2018',
  content:`
   <p>This is the content for third article.`
 }
};
*/
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate = `
    <!doctype html>
<html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="/ui/style.css">
    </head>

    <body>
        
    <div class="container">    
     <div>
         <a href="/">Home</a>
     </div>
     <hr border=solid black 1px>

       <h3> ${heading}</h3>
        <div>
            ${date.toDateString()}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
    
</html>`;

return htmlTemplate; 
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt){
    //how do we create a hash?
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'this-is-some-random-string');
    res.send(hashedString);
});

var pool = new Pool(config);

app.get('/test-db',function(req,res){
    //make  a select request 
    
    //return a response with a results
    pool.query('SELECT * FROM test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result.rows));
       }
    });
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

/*
//sending data using jason array as string
var names = [];
app.get('/submit-name/:name',function(req,res){
    //Get the name from the request
   var name = req.params.name;  //TODO
   names.push(name);
   //JSON:JavaScript Object Notation
   res.send(JSON.stringify(names));
   
});

*/

// using query parameter (in urls)

var names = [];
app.get('/submit-name',function(req,res){ //URL : /submit-name?name=xxxx
    //Get the name from the request
   var name = req.query.name;  //TODO
   names.push(name);
   //JSON:JavaScript Object Notation
   res.send(JSON.stringify(names));
   
});



app.get('/articles/:articleName', function (req, res) {
//articleName == article-one
//articles[articleNAme]=={}content object for article one

  
    pool.query("SELECT * FROM article WHERE title = $1",  [req.params.articleName],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } 
       else{
           if(result.rows.length === 0)
             {
                 res.send(404).send("Article Not Found");
             } 
           else
           {
              var articleData = result.rows[0];
              res.send(createTemplate(articleData));
           }
       }
    });
    
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});







/*
app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});*/