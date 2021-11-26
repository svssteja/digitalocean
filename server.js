const express=require('express');
const app=new express();

app.get('/',(req,res)=>{
    res.send("Welcome to the digital ocean")
});

app.listen(5555,()=>{
    console.log("server started on 5555 successfully")
})