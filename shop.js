const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{   //use function takes an array of event handlers
    console.log('in shop');
    res.send('<h1>Hello from SHop express</h1>');
});


module.exports=router;