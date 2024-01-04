//const http= require('http'); //this is a special keyword to import files in node js

const express=require('express');
const bodyParser=require('body-parser');
const app=express();    //this is an express application by running express as a function

app.use(bodyParser.urlencoded());

//app.use-> for all incoming requests, app.get-> only parses get requests & app.post-> only parses post requests

app.use('/',(req,res,next)=>{   //use function takes an array of event handlers
    console.log("always");
   next();
});

app.use('/add-product',(req,res,next)=>{   //use function takes an array of event handlers
    console.log("in the middleware");
    //next(); //alows request to continue to the next middleware in line
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add products</button></form>');
});

app.post('/product',(req,res,next)=>{   //use function takes an array of event handlers
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{   //use function takes an array of event handlers
    console.log("in another the middleware");
    res.send('<h1>Hello from express</h1>'); //to 
});


app.listen(4000);
// const server= http.createServer(app);    //thi sapp is a handler too
// server.listen(4000);    //starts a process where node js will keep this running for incoming requests