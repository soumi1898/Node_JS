//create a server for node js:
//import some functionality
//core modules: 
// http: launch a ServiceWorkerRegistration, send requests, 
// https: launch a SSL sever for encrypted,
//  fs, path,os

const http= require('http'); //this is a special keyword to import files in node js
const routes=require('./routes');
const server= http.createServer(routes.handler);    //takes a req listner, to be execurted for every req reaching our server
console.log(routes.textMessage);
server.listen(5000);    //starts a process where node js will keep this running for incoming requests