//const http= require('http'); //this is a special keyword to import files in node js

const express=require('express');

const app=express();    //this is an express application by running express as a function

app.use((req,res,next)=>{   //use function takes an array of event handlers
    console.log("in the middleware");
    next(); //alows request to continue to the next middleware in line
});

app.use((req,res,next)=>{   //use function takes an array of event handlers
    console.log("in another the middleware");
    res.send('<h1>Hello from express</h1>'); //to 
});


app.listen(4000);
// const server= http.createServer(app);    //thi sapp is a handler too
// server.listen(4000);    //starts a process where node js will keep this running for incoming requests