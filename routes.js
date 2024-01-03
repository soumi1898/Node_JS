const fs=require('fs');

const requestHandler=(req,res)=>{

    const url=req.url;
    const method=req.method;

if(url==='/')
{
    console.log("in /");
    res.write('<html>'); //to write something into the response
    res.write('<head><title>First Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    //process.exit();
    return res.end();   
}
if(url==='/message'&& method==='POST' )//&& method==='POST'
{
    console.log("in /message");
    const body=[];
    //this is an eventListner(the on method) to listen
    req.on('data',(chunk)=>{    //chunk is thw data we'll recieve
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{      //will be fired once all execution is done
        const parsedBody=Buffer.concat(body).toString();
        console.log(parsedBody);
        const message=parsedBody.split('=')[1];
        fs.writeFileSync("newFile.txt",message);
    });
    //fs.writeFileSync("msg1.txt","Hello from my new file");
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();
}
if(url==='/home')
{
    console.log("in /home");
    res.write('<html>'); //to write something into the response
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
    //process.exit();

    return res.end();   
}
if(url==='/about')
{
    console.log("in /about");
    res.write('<html>'); //to write something into the response
    res.write('<head><title>Second Page</title></head>');
    res.write('<body><h1>Welcome to about</h1></body>');
    res.write('</html>');
    //process.exit();

    return res.end();   
}
if(url==='/node')
{
    console.log("in /node");
    res.write('<html>'); //to write something into the response
    res.write('<head><title>Third Page</title></head>');
    res.write('<body><h1>Welcome to my node js project</h1></body>');
    res.write('</html>');
    //process.exit();

    return res.end();   
}

//HOW TO SEND RESPONSE   
console.log("outside");
res.setHeader('Content-Type','text/html');
res.write('<html>'); //to write something into the response
res.write('<head><title>First Page</title></head>');
res.write('<body><h1>Welcome </h1></body>');
res.write('</html>');
res.end();
//process.exit();

}


module.exports={
    handler: requestHandler,
    textMessage: "This is in Routes."
};