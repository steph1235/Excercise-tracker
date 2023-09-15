const express=require('express');
const app=express();
const port=4000;

console.log('testing thing');

app.listen(port, ()=>{
    console.log('server runnining at 4000')
})