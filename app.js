//create a server for node js:
//import some functionality
//core modules: 
// http: launch a ServiceWorkerRegistration, send requests, 
// https: launch a SSL sever for encrypted,
//  fs, path,os

const http= require('http'); //this is a special keyword to import files in node js

const server= http.createServer((req,res)=>{       //if req comes, execute this function, this will return a server
    console.log('hi');
    console.log(req);
});    //takes a req listner, to be execurted for every req reaching our server

server.listen(4000);    //starts a process where node js will keep this running for incoming requests