const express =require('express');
const app =express();

app.get('/',(req,res)=>{
    res.json({name:'mohammad'})
});

app.listen(8080);
