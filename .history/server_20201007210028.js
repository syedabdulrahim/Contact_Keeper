const express=require('express');

const app=express();


const PORT =process.env.PORT||5000;


app.get('/',(req,resp)=>{

    resp.json('MAN');
    
    })

app.listen(PORT,()=>console.log("hello World"));