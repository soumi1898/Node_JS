const express=require('express');

const bodyParser=require('body-parser');

const app=express();    //this is an express application by running express as a function

const adminRoutes=require('./routes/admin');

const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

//app.use-> for all incoming requests, app.get-> only parses get requests & app.post-> only parses post requests

//The below code will be executed as default, if not handles in admin ot shop files

app.use('/',(req,res,next)=>{   //use function takes an array of event handlers
    //console.log("in another the middleware");
    res.status(404).send("<h1>Page not found</h1>"); //to 
});

app.listen(4000);   //this is the alternative to: const server= http.createServer(app), server.listen(4000);
