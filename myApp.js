let express = require('express');
let app = express();
require('dotenv').config()


// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {

  let string = `${req.method} ${req.path} - ${req.ip}`
  console.log(string) 
    
   next();
 
 });

// #1
// console.log('Hello World')

// #2
// app.get("/",(req,res)=>{
//   res.send("Hello Express");
// });


// #4
app.use('/public',express.static(__dirname+'/public'));



// #3
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/index.html");
});

// #5

app.get('/json',(req,res)=>{
  res.json({"message": "Hello json"});
});

// #6

app.get('/json',(req,res)=>{
  if(process.env.MESSAGE_STYLE==='uppercase'){
    res.json({"message": "HELLO JSON"})
  }else{
    res.json({"message": "Hello json"});
  }
});

































 module.exports = app;
