const express = require('express');
const bodyparser= require('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const {mongoUrl} = require("./keys");



require("./models/User")
const authRoutes = require("./Routes/authRoutes");


app.use(bodyparser.json());
app.use(authRoutes);


// DB CONNECTION

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log("Database Connected"); 
})

mongoose.connection.on('error',(err)=>{
    console.log("ERROR:",err)
})

// ROUTES

app.get('/',(req,res)=>{
    res.send("Hello");
})


// PORT CONFIGURATION

app.listen(PORT,()=>{
    console.log("Server Running on PORT 3000 !")
})