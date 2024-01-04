const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{   //use function takes an array of event handlers
    console.log("in the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add products</button></form>');
});

router.post('/product',(req,res,next)=>{   //use function takes an array of event handlers
    console.log(req.body);
    //res.send('<h1>Hello from admin express.....redirecting</h1>');// the res.redirect won't work after this, b/c both the send & redirect sends a response to the client
    res.redirect('/');
});

module.exports=router;