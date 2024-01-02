//create a server for node js:
//import some functionality
//core modules: 
// http: launch a ServiceWorkerRegistration, send requests, 
// https: launch a SSL sever for encrypted,
//  fs, path,os

const http= require('http'); //this is a special keyword to import files in node js
const fs=require('fs');

const server= http.createServer((req,res)=>{       //if req comes, execute this function, this will return a server
   
   //console.log(req.url,req.method,req.headers);
//parse the url
    const url=req.url;
    const method=req.method;
    if(url==='/home')
    {
        res.write('<html>'); //to write something into the response
        res.write('<head><title>First Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        //process.exit();

        return res.end();   
    }
    if(url==='/about')
    {
        res.write('<html>'); //to write something into the response
        res.write('<head><title>Second Page</title></head>');
        res.write('<body><h1>Welcome to about</h1></body>');
        res.write('</html>');
        //process.exit();

        return res.end();   
    }
    if(url==='/node')
    {
        res.write('<html>'); //to write something into the response
        res.write('<head><title>Third Page</title></head>');
        res.write('<body><h1>Welcome to my node js project</h1></body>');
        res.write('</html>');
        //process.exit();

        return res.end();   
    }
    if(url==='/message' && method==='POST')
    {
        fs.writeFileSync("msg.txt","Hello from my new file");
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
//HOW TO SEND RESPONSE   
   res.setHeader('Content-Type','text/html');
   res.write('<html>'); //to write something into the response
   res.write('<head><title>First Page</title></head>');
   res.write('<body><h1>Welcome </h1></body>');
   res.write('</html>');
   res.end();
   process.exit();
});    //takes a req listner, to be execurted for every req reaching our server

server.listen(3000);    //starts a process where node js will keep this running for incoming requests