const express =require('express');
const app =express();

app.get('/',(req,res)=>{
    res.json({name:'mohammad'})
});

app.get('/new',(req,res)=>{
    res.json({name:'ali'})
});

app.listen(8080);
