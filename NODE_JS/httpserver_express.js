
const express=require('express');
const app=express()
const dt=require('./ownModule');
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to fynd academy")
    res.send("The date and time are" +dt.getCurrentDate());

});
app.listen(3000,()=>{
    console.log('port number 3000');
})