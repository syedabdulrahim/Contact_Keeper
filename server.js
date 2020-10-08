const express=require('express');
const connectDB=require('./config/db')

const app=express();


const PORT =process.env.PORT||5000;

//body parser
app.use(express.json({extended:false}))
//connect db
connectDB();


//DEFINING ROUTES

app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));


app.listen(PORT,()=>console.log("hello World"));